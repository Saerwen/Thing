async function procesarTextoConGPT(texto) {
    const model = await use.load();
    const embeddings = await model.embed(texto);
    const embeddingsArray = embeddings.arraySync();
    const sentenceSimilarities = embeddingsArray[0].map((embedding, i) => {
      const sentenceEmbedding = embeddingsArray[0][i];
      const documentEmbedding = embeddingsArray[0].reduce((acc, embedding) => {
        return acc + embedding / embeddingsArray[0].length;
      }, 0);
      const similarity = tf.losses.cosineDistance(sentenceEmbedding, documentEmbedding, 0).arraySync()[0];
      return similarity;
    });
    
    const sentences = texto.split('. ');
    const numSentences = sentences.length;
    const numSentencesToInclude = Math.ceil(numSentences * 0.2); // incluir el 20% de las oraciones
    const sortedSentences = sentenceSimilarities
      .map((similarity, i) => ({ similarity, sentence: sentences[i] }))
      .sort((a, b) => b.similarity - a.similarity);
    const selectedSentences = sortedSentences.slice(0, numSentencesToInclude);
    return selectedSentences.map(({ sentence }) => sentence).join('. ');
  }