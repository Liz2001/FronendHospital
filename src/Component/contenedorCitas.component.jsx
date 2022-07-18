import CitasMedico from "../Component/citaMedico.component"
const ContenedorCitas = (props) => {
    const armarcaja = () => {
        const listacitas = []
        let cards = []

        const leng = props.info.length

        props.info.forEach((infos, index) => {


            const card = <CitasMedico info={infos} cambio={props.cambio}/>
            cards.push(card)
            if ((index + 1) % 2 === 0) {
                listacitas.push(
                    <div className="row pt-4">
                        {cards}
                    </div>
                )
                cards = []
            }
            if ((index + 1) - leng === 0) {
                listacitas.push(
                    <div className="row pt-4">
                        {cards}
                    </div>
                )
                cards = []
            }



        })
        return listacitas
    }
    return <>
        {
            armarcaja(props.info)
        }
    </>

}
export default ContenedorCitas