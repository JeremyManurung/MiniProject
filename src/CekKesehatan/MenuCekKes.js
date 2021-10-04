import { useContext } from "react";
import {penampungContext} from "./Penampung"

function MenuCekKes() {
    const { pertanyaanState, setpertanyaanState, userName, setUserName } = useContext(
        penampungContext
    );
    return (
        <div className="MenuKes">
        <label>Masukkan Nama Anda</label>
        <input
            type="text"
            placeholder="Contoh. jeremy"
            onChange={(event) => {
            setUserName(event.target.value);
            }}
        />
        <button
            onClick={() => {
            setpertanyaanState("mulai");
            }}
        >
            Mulai
        </button>
        </div>
    );
}

export default MenuCekKes;
