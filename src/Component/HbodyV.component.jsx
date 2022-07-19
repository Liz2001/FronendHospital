const HbodyV = (props) => {
    if (props.thor === "lectura") {
        const linea=[]
        let hlinea = []
        let xlinea = []
        for (let i = 1; i < 100; i++) {
            
                xlinea.push(
                <td class="text-center">
                <input type="checkbox" class="btn-check" id={i} autocomplete="off" />
                <label type="checkbox" class="btn btn-outline-primary " for={i} disabled>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label>
            </td>)
                if ((i) % 7 === 0) {
                    linea.push(
                        <tr>
                            <td class="text-center" >{(i/7)+7} hrs</td>
                            {xlinea}
                        </tr>
                    )
                    hlinea=[]
                    xlinea=[]
                }
            



        }
        return <>
            <tbody>
                {linea}
            </tbody>
        </>
    }
}
export default HbodyV