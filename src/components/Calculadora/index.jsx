import { useEffect, useState } from 'react'
import styles from './Calculadora.module.css'

const Calculadora = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState(0);
    const [rating, setRating] = useState('');

    useEffect(() => {
        if(height !== 0 || weight !== 0) {
            const imc = (weight / (height * height)).toFixed(2);
            setResult(imc);
        }
    }, [height, weight])

    useEffect(() => {
        if(result < 18.5 && result > 0) {
            setRating('Você está em grau de magreza!');
        } else if(result >= 18.5 && result < 24.9) {
            setRating('Você está em niveis normais.');
        } else if(result >= 24.9 && result < 30) {
            setRating('Você está em sobrepeso!');
        } else if(result >= 30) {
            setRating('Você está em grau de obesidade!');
        }

    }, [result])

    const getData = (e) => {
        if(e.target.id === 'height') {
            setHeight((e.target.value)/100);
        } else {
            setWeight(e.target.value);
        }
    }

    return(
        <>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <input type="number" placeholder="Altura (cm)" id='height' className={styles.height} onChange={getData} required />
                    <input type="number" placeholder="Peso (kg)" id='weight' className={styles.weight} onChange={getData} required />
                </div>
                <div className={styles.results}>
                    <span>
                        Seu IMC: 
                        <br /><br /> 
                        <b>{result}</b>
                    </span>
                </div>
            </form>
            <span className={styles.textResults}>{rating}</span>
        </>
    )
}

export default Calculadora;