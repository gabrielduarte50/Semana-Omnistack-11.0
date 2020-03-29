import React, { useState } from "react";
import logoImg from "../../asset/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import api from "../../services/api";

export default function NewIncident() {
  const ongId = localStorage.getItem("ongId");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (err) {
      alert("erro no cadastro de caso");
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro novo caso</h1>
          <p>Descreva o caso</p>
          <div className="back-link">
            <Link to="/profile">
              <FiArrowLeft size={15} color="E02041" />
              Voltar para Home
            </Link>
          </div>
        </section>

        <form action="" className="">
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Descriçao"
            value={description}
            onChange={e => setTitle(e.target.description)}
          />

          <input
            placeholder="Valor"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button onClick={handleNewIncident} className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
