const HbodyP = (props) => {
    if (props.thor === "lectura") {
        const linea = []
        let hlinea = []
        let xlinea = []
        for (let i = 1; i < 100; i++) {

            xlinea.push(
                <td class="text-center">
                    <input type="checkbox" class="btn-check" id={i+1000} autocomplete="off" />
                    <label type="checkbox" class="btn btn-outline-primary " for={i+1000} disabled>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label>
                </td>)
            if ((i) % 7 === 0) {
                linea.push(
                    <tr>
                        <td class="text-center" >{(i / 7) + 7} hrs</td>
                        {xlinea}
                    </tr>
                )
                hlinea = []
                xlinea = []
            }




        }
        return <>
            <tbody>
                {linea}
            </tbody>
        </>
    }
    else {
        return <>
            <tbody>
                <tr>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                </tr>
                <tr>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                </tr>
                <tr>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                </tr>
                <tr>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                    <td><input type="text" className="form-control-plaintext text-center" placeholder="4:30" /></td>
                </tr>
            </tbody>

        </>

    }
}
export default HbodyP