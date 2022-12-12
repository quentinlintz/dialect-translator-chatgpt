import React, { useState } from 'react';
import {
  Container,
  Title,
  Button,
  Input,
  Textarea,
} from '@mantine/core';

const App = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [sentence, setSentence] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleFileSelect = (event) => {
    setCsvFile(event.target.files[0]);
  }

  const handleTranslateClick = () => {
    // Implement translation logic here using the csvFile and sentence
    // Then set the translated text using setTranslatedText
  }

  return (
    <Container>
      <Title>Dialect Translator</Title>
      <input type="file" accept=".csv" onChange={handleFileSelect} />
      <Input value={sentence} onChange={(event) => setSentence(event.target.value)} />
      <Button onClick={handleTranslateClick}>Translate</Button>
      <Textarea value={translatedText} />
    </Container>
  );
};

export default App