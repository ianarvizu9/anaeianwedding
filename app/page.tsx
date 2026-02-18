import Image from "next/image";
import "./styles/home.css";
import FlipCard from "./components/FlipCard";
import styles from "./styles/home.module.css";


export default function Home() {
  return (
    <main className="min-h-screen">

      <div className="sticky top-0 min-h-[80vh] overflow-hidden z-0">
        <div className="absolute top-0 w-full flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src="/images/A&I_INVITACION_PT1.png"
              alt="Portada"
              width={600}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-transparent">
        <Image
          src="/images/A&I_INVITACION_PT2.png"
          alt="Portada"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>

      <div className="relative w-full min-h-screen flex items-center justify-center">

        {/* Fondo */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/images/A&I_INVITACION_PT3.png')" }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center gap-16 py-24 w-full max-w-4xl">

          <FlipCard
            frontImage="/images/A&I_INVITACION_RELIGIOSA.png"
            backImage="/images/A&I_INVITACION_RELIGIOSA_2.png"
            locationUrl="https://share.google/qpwgn3tKamzoV5N5S"
          />

          <FlipCard
            frontImage="/images/A&I_INVITACION_CIVIL.png"
            backImage="/images/A&I_INVITACION_CIVIL_2.png"
            locationUrl="https://share.google/gwv9PySHVIfOiHFIJ"
          />

          <FlipCard
            frontImage="/images/A&I_INVITACION_RECEPCION.png"
            backImage="/images/A&I_INVITACION_RECEPCION_2.png"
            locationUrl="https://maps.app.goo.gl/3GKA4ByznMnmcBQZ6?g_st=ic"
          />
        </div>

      </div>

      <div className="relative w-full">

        <Image
          src="/images/A&I_INVITACION_PT4.png"
          alt="Portada"
          width={1200}
          height={800}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-end justify-center">
          <a href="/" className="absolute inset-0 flex items-end justify-center">
            <Image
              src="/images/A&I_INVITACION_RSVP_2.png"
              alt="Portada"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </a>
        </div>

      </div>

    </main>
  );
}
