import React, { useState } from 'react';
import { Container, Button, Input } from '@mantine/core';

const DialectTranslator = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleCsvSelect = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleTranslate = () => {
    // code to handle translation goes here
  };

  return (
    <Container p='lg'>
      <h1>Dialect Translator</h1>
      <input type="file" onChange={handleCsvSelect} />
      <Input value={input} onChange={handleInputChange} />
      <Button onClick={handleTranslate}>Translate</Button>
      {output}
    </Container>
  );
};

export default DialectTranslator;