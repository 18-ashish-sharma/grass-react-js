import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// https://www.npmjs.com/package/axios
import axios from 'axios';

function BasicForm() {
  const [gameName, setGameName] = useState('');
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  async function handleClick() {
    const payload = {
        game_name: gameName,
        no_of_players: numberOfPlayers
    }
    try {
        const response = await axios.post('http://localhost:8282/game/create', payload);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
  }
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Game Name</Form.Label>
        <Form.Control type="text" placeholder="Enter game name" name="gameName" value={gameName} onChange={(event) => setGameName(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number of Players</Form.Label>
        <Form.Control type="number" placeholder="Enter number of players" name="numberOfPlayers" value={numberOfPlayers} onChange={(event) => setNumberOfPlayers(event.target.value)} />
      </Form.Group>
      <Button variant="warning" type="submit" onClick={() => handleClick()}>
        Submit
      </Button>
    </>
  );
}

export default BasicForm;