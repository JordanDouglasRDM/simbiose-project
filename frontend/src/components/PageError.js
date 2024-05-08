import './PageError.css';

function PageError(props) {

    return (
        <div className="container">
            <img src="https://i.imgur.com/qIufhof.png"/>

            <h1>
                <span>{props.errorCode}</span> <br/>
                {props.errorStatusText}
            </h1>
            <p className="subtitle">Houve algum problema no servidor backend, acesse <a
                href="https://github.com/JordanDouglasRDM/simbiose-project/blob/main/backend/README.md" target={"_blank"}>backend/README.md</a> e
                confirme se o
                passo a passo foi executado corretamente.</p>
            <p className="info">
                Caso o erro persista, entre em contato com o desenvolvedor <em>Jordan Douglas</em> através do Whatsapp clicando
                <a href="https://api.whatsapp.com/send/?phone=5518997455265&text&type=phone_number" target={"_blank"}> aqui</a>.
            </p>
        </div>
    );
}

export default PageError;