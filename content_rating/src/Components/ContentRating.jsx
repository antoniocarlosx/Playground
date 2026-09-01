import React, { Component } from "react";
import "./ContentRating.css";

// Inicializa o componente  ContentRating
class ContentRating extends Component {
  // Metodo Construtor
  constructor() {
    super();
    // Inicializa os estados para contagem de curtidas e descurtidas
    this.state = {
      likes: 0, //likes zerados
      dislikes: 0, //deslikes zerados
      totalRatings: 0,

      // Arrow Function que é chamada quando o usuário clica no botão de like
      handleLike: () => {
        // setState é utiliada para atualizar o estado do componente
        this.setState((prevState) => ({
          //O Estado anterior (total anterior) é acessado com prevState antes da atualização
          likes: prevState.likes + 1, //A contagem é atualizada pegando a contagem anterior e incrementando 1
          totalRatings: prevState.totalRatings + 1, // Atualiza o número total de avaliações
        })); // Garantindo que cada clique atualizará com precisão a contagem correta
      },

      // Arrow Function que é chamada quando o usuário clica no botão de Deslike
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
  }
  render() {
    return (
      <>
        <h1>Além da Motivação</h1>
        <div className="content-rating">
          <p className="content">
            <span> &quot; </span>Peça, porém, com firmeza e constância, sem
            depender de como você está se sentindo no momento. <br /><br />Pois quem vive
            baseado apenas em suas emoções e na motivação passageira é igual a
            uma onda do mar: é levado para onde o vento dos sentimentos sopra e
            fica à mercê das circunstâncias da vida. <span>&quot;</span>
          </p>
          <div className="ratings-buttons">
            <button className="like-button" onClick={this.state.handleLike}>
              Curtir ({this.state.likes})
            </button>

            <button
              className="dislike-button"
              onClick={this.state.handleDislike}
            >
              Descutir ({this.state.dislikes})
            </button>

            <p className="totalRatings"> Total de Avaliações: {this.state.totalRatings}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
