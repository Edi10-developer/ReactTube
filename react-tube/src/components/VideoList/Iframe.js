const Iframe = props => {
    return (
        <div className="iframe" >
            <iframe src={props.src} title={props.title} allowFullScreen />
            <div>
                <h3>Title {props.title}</h3>
                <p>Descriprion Descriprion Descriprion Descriprion {props.description}</p>
            </div>
        </div>
    )
}
export default Iframe;