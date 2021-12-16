import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  
  const [render, setRender] = useState(true);
  const [terms, setTerms] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    console.log(JSON.parse(JSON.stringify(data)))
    const response = await fetch('https://futliteapi.herokuapp.com/prelist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => { console.error(err) });
    console.log(response);
    setRender(false);
  };

  return (
    <>
      {render ? (
        <section id="Form" onSubmit={handleSubmit(onSubmit)}>
          <p>Se vienen los NFTs de Fútbol.</p>
          <p>Suscribite para obtener novedades y descuentos.</p>
          <p>Inscribite para estar en la PRELISTA.</p>
          <h1>Sumate!</h1> 
          <form>
            <div>
              <label>Nombre</label>
              <input type="text" {...register("nombre")} />
            </div>
            <div>
              <label>Apellido</label>
              <input type="text" {...register("apellido")} />
            </div>
            <div>
              <label>Telefono</label>
              <input type="text" {...register("telefono")} />
            </div>
            <div>
              <label>Mail</label>
              <input type="email" {...register("email")} />
            </div>
            <div>
              <label id="spacedTop">Acepto <a id="terms" href="/terminos">terminos y condiciones</a><input id="spacedLeft" type="checkbox" onClick={()=>{setTerms(!terms)}}/></label>
              
            </div>
            {terms && <button type="submit">ENVIAR</button>}
          </form>
          {/* <button id="closeBtn" onClick={()=>{setRender(false)}}>x</button> */}
        </section>
      ) : ''}
    </>
  );
}

export default Form;