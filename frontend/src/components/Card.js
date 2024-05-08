import './Card.css';
import Checkbox from "./Checkbox";

function Card(props) {

    const data = props.item;
    let nome = data.nome.split(" ");
    let justificativa = data.justificativa.split(" ");

    function limiteNomeExibido(nome) {
        const limite = 6;
        if (nome.length > limite) {
            return nome.slice(0, limite).join(" ") + "...";
        } else {
            return data.nome;
        }
    }
    function limiteJustificativaExibido(justificativa) {
        const limite = 50;
        if (justificativa.length > limite) {
            return justificativa.slice(0, limite).join(" ") + "...";
        } else {
            return data.justificativa;
        }
    }
    justificativa = limiteJustificativaExibido(justificativa);
    nome = limiteNomeExibido(nome);

    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-header__title">ROUANET</h2>
                <p className="card-header__subtitle">{nome}</p>
                <div className="card-header__locale">
                    <span className="card-header__locale-item">{data.municipio}</span>
                    <span className="card-header__locale-item">•</span>
                    <span className="card-header__locale-item">{data.uf}</span>
                </div>
            </div>
            <div className="card-body">
                <div className="card-body__description">
                    <p className="card-body__description-text">
                        {justificativa}
                    </p>
                </div>
                <div className="card-body__price">
                    <div className="approved">
                        <span className="approved-description">Aprovado</span>
                        <span className="approved-price">{data.valor_aprovado}</span>
                    </div>
                    <div className="raised">
                        <span className="raised-description">Captado</span>
                        <span className="raised-price">{data.valor_captado}</span>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="add">ADICIONAR</button>
                <div className="checkbox">
                    <Checkbox/>
                </div>

            </div>
        </div>
    );
}

export default Card;