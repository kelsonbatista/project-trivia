// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import somEntrada from '../../assets/audios/entrada.mp3';

// Right answers
import rightAnswer1 from '../../assets/audios/certa-a-resposta.mp3';
import rightAnswer2 from '../../assets/audios/certa-a-resposta3.mp3';
import rightAnswer3 from '../../assets/audios/certa-a-resposta4.mp3';

// Conversation
import audioConversation1 from '../../assets/audios/controle-emocional.mp3';
import audioConversation2 from '../../assets/audios/da-branco.mp3';
import audioConversation3 from '../../assets/audios/da-para-acertar.mp3';
import audioConversation4 from '../../assets/audios/entendeu-a-pergunta.mp3';
import audioConversation5 from '../../assets/audios/essa-me-pegou.mp3';
import audioConversation6 from '../../assets/audios/fofoca.mp3';
import audioConversation7 from '../../assets/audios/ja-ouviu-falar.mp3';
import audioConversation8 from '../../assets/audios/nao-eh-dificil.mp3';
import audioConversation9 from '../../assets/audios/nervosismo.mp3';
import audioConversation10 from '../../assets/audios/nervosismo2.mp3';
import audioConversation11 from '../../assets/audios/opcoes4.mp3';
import audioConversation12 from '../../assets/audios/pergunta-boa.mp3';
import audioConversation13 from '../../assets/audios/posso-perguntar.mp3';
import audioConversation14 from '../../assets/audios/posso-perguntar2.mp3';
import audioConversation15 from '../../assets/audios/sera-que-hoje.mp3';
import audioConversation16 from '../../assets/audios/sera-que-hoje2.mp3';
import audioConversation17 from '../../assets/audios/ta-por-dentro.mp3';
import audioConversation18 from '../../assets/audios/vai-chutar.mp3';
import audioConversation19 from '../../assets/audios/voce-pode-acertar.mp3';
import audioConversation20 from '../../assets/audios/ta-indo-bem.mp3';
import audioConversation21 from '../../assets/audios/nao-eh-dificil2.mp3';
import audioConversation22 from '../../assets/audios/ele-treina.mp3';

// Wrong answers
import wrongAnswer1 from '../../assets/audios/nao1.mp3';
import wrongAnswer2 from '../../assets/audios/nao2.mp3';
import wrongAnswer3 from '../../assets/audios/nao3.mp3';
import wrongAnswer4 from '../../assets/audios/nao4.mp3';

// Right answers
const right1 = new Audio(rightAnswer1);
const right2 = new Audio(rightAnswer2);
const right3 = new Audio(rightAnswer3);
export const rightAnswer = [right1, right2, right3];

// Conversation
const conversation1 = new Audio(audioConversation1);
const conversation2 = new Audio(audioConversation2);
const conversation3 = new Audio(audioConversation3);
const conversation4 = new Audio(audioConversation4);
const conversation5 = new Audio(audioConversation5);
const conversation6 = new Audio(audioConversation6);
const conversation7 = new Audio(audioConversation7);
const conversation8 = new Audio(audioConversation8);
const conversation9 = new Audio(audioConversation9);
const conversation10 = new Audio(audioConversation10);
const conversation11 = new Audio(audioConversation11);
const conversation12 = new Audio(audioConversation12);
const conversation13 = new Audio(audioConversation13);
const conversation14 = new Audio(audioConversation14);
const conversation15 = new Audio(audioConversation15);
const conversation16 = new Audio(audioConversation16);
const conversation17 = new Audio(audioConversation17);
const conversation18 = new Audio(audioConversation18);
const conversation19 = new Audio(audioConversation19);
const conversation20 = new Audio(audioConversation20);
const conversation21 = new Audio(audioConversation21);
const conversation22 = new Audio(audioConversation22);
export const conversation = [conversation1, conversation2, conversation3,
  conversation4, conversation5, conversation6, conversation7, conversation8,
  conversation9, conversation10, conversation11, conversation12, conversation13,
  conversation14, conversation15, conversation16, conversation17, conversation18,
  conversation19, conversation20, conversation21, conversation22];

// Wrong answers
const wrong1 = new Audio(wrongAnswer1);
const wrong2 = new Audio(wrongAnswer2);
const wrong3 = new Audio(wrongAnswer3);
const wrong4 = new Audio(wrongAnswer4);
export const wrongAnswer = [wrong1, wrong2, wrong3, wrong4];

export const entrada = new Audio(somEntrada);

const TIME1 = 5000;
const TIME2 = 10000;
const TIME3 = 17000;
const TIME4 = 23000;

export function handlePlay(audio) {
  audio.currentTime = 0;
  return audio.play();
}

export function handleConversation() {
  // const { game } = props;
  // console.log(game, 'props');
  setTimeout(() => {
    handlePlay(conversation[Math.floor(Math.random() * conversation.length)]);
  }, TIME1);

  setTimeout(() => {
    handlePlay(conversation[Math.floor(Math.random() * conversation.length)]);
  }, TIME2);

  setTimeout(() => {
    handlePlay(conversation[Math.floor(Math.random() * conversation.length)]);
  }, TIME3);

  setTimeout(() => {
    handlePlay(conversation[Math.floor(Math.random() * conversation.length)]);
  }, TIME4);
}

// handleConversation.propTypes = {
//   game: PropTypes.object,
// }.isRequired;

// const mapStateToProps = (state) => ({
//   game: state.game,
// });

// export default connect(mapStateToProps, null)(handleConversation);
