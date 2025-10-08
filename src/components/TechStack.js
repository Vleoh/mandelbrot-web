import React from 'react';

const stack = [
  'LangChain', 'LangGraph', 'OpenAI', 'Azure OpenAI', 'Anthropic', 'AWS Bedrock',
  'Pinecone', 'Chroma', 'Weaviate', 'PostgreSQL', 'Redis', 'FastAPI', 'Node.js', 'React'
];

const TechStack = () => (
  <section id="tecnologia" className="py-16 bg-white">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-center">Tecnología que usamos</h2>
      <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">Elegimos las herramientas adecuadas para cada caso, priorizando seguridad, costo y performance.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {stack.map((s) => (
          <span key={s} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-800">{s}</span>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;

