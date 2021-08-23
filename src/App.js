import { useState } from 'react';
import {getRandomMusicalNotes} from './melodic.utils'

import './App.css';

function App() {

  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [melodic, setMelodic] = useState(null);
  const [musicalNotes, setMusicalNotes] = useState(null);
  const [americanMusicalNotes, setAmericanMusicalNotes] = useState(null);
  const [sharps, setSharps] = useState(null);
  const [americanSharps, setAmericanSharps] = useState(null);
  const [flats, setFlats] = useState(null);
  const [americanFlats, setAmericanFlats] = useState(null);
  const [timer, setTimer] = useState(3);

  const turnOnOff = () => {
    if(!started){
      setIntervalId(setInterval(() => {
        changeMelodic()
      }, timer * 1000));
    } else {
      clearInterval(intervalId)
    }
    setStarted(!started)
  }

  const stop = () => {
    if(intervalId){
      clearInterval(intervalId)
    }
    setStarted(false)
  }

  const changeMelodic = () => {
    const result = getRandomMusicalNotes(
      musicalNotes, americanMusicalNotes, sharps, americanSharps, flats, americanFlats
    );
    setMelodic(result)
  }

  const onChangeMusicalNotes = (evt) => {
    setMusicalNotes(evt.target.checked)
    stop()
  }

  const onChangeAmericanMusicalNotes = (evt) => {
    setAmericanMusicalNotes(evt.target.checked)
    stop()
  }

  const onChangeSharps = (evt) => {
    setSharps(evt.target.checked)
    stop()
  }

  const onChangeAmericanSharps = (evt) => {
    setAmericanSharps(evt.target.checked)
    stop()
  }

  const onChangeFlats = (evt) => {
    setFlats(evt.target.checked)
    stop()
  }

  const onChangeAmericanFlats = (evt) => {
    setAmericanFlats(evt.target.checked)
    stop()
  }

  const onChangeTimer = (evt) => {
    setTimer(evt.target.value)
    stop()
  }

  return (
    <div>
      <h1>Melodic Up!</h1>
      <div>
        timer (seg):
        <input type="number" value={timer} onChange={onChangeTimer} />
      </div>
      <div>
        musicalNotes:
        <input type="checkbox" value={musicalNotes} onChange={onChangeMusicalNotes} />
      </div>      <div>
        americanMusicalNotes:
        <input type="checkbox" value={americanMusicalNotes} onChange={onChangeAmericanMusicalNotes} />
      </div>      <div>
        sharps:
        <input type="checkbox" value={sharps} onChange={onChangeSharps} />
      </div>      <div>
        americanSharps:
        <input type="checkbox" value={americanSharps} onChange={onChangeAmericanSharps} />
      </div>      <div>
        flats:
        <input type="checkbox" value={flats} onChange={onChangeFlats} />
      </div>      <div>
        americanFlats:
        <input type="checkbox" value={americanFlats} onChange={onChangeAmericanFlats} />
      </div>
      <br />
      <button onClick={turnOnOff}>{started ? 'stop!' : 'start!'}</button>
      <div className="melodic">
        <span>{melodic}</span>
      </div>
    </div>
  );
}

export default App;
