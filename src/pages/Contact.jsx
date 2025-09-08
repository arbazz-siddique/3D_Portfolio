import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader"
import useAlert from "../hook/useAlert";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef  = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isloading, setIsloading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert, hideAlert} = useAlert()

  const handleChange = (e) => {
    setForm({...form, [e.target.name]:[e.target.value]})
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
    setIsloading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name: "Arbazz",
        from_email: form.email,
        to_email: "mdarbazsiddique719@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsloading(false)
      showAlert({show:true, text:"Message sent successfully", type:'success'})
      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('idle')
        setForm({name:'', email:'', message:''})
      }, [2000]);
      
    }).catch((error)=>{
      setIsloading(false);
      setCurrentAnimation('walk.left')
      showAlert({show:true, text:"I didn't recived your messages!", type:'danger'})
      
      // so error message
    })
  }

  const handleFocus = () => setCurrentAnimation('walk')

  const handleBlur = () => setCurrentAnimation('idle')
  

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert}/> }
      
      <div className="flex-1 min-w-[50%] flex flex-col">

        
        <h1>Get in touch</h1>

     
        <form 
        className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
        > 
          <label className="text-black font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Arbazz"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Arbazz@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how i can hlep you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn "
            disabled={isloading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isloading ? "sending..." : "send message"}
          </button>
        </form>
      </div>
      {/* fro display the box model */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] ">
        <Canvas
        camera={{
          position:[0,0,5],
          fov:75,
          near:0.1,
          far:1000
        }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader/>}>
          <Fox 
          currentAnimation={currentAnimation}
            position={[0.5, 0.35 , 0]}
            rotation={[12.625, -0.6 ,0]}
            scale={[0.5, 0.5 ,0.5]}
          />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
