import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-serif">
        <div className="p-32 space-y-16">
          <h1 className="text-6xl font-black">Hello World</h1>
          <div className="flex flex-wrap gap-8">
            <div className="w-1/4">
              <h2
                id="card-title"
                className="text-m leading-loose text-center uppercase tracking-widest"
              >
                Mercury
              </h2>
              <Image
                src="/mercury.jpg"
                className="mx-auto my-4"
                alt="Mercury"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <p className="leading-relaxed">
                Mercury is the smallest planet in the Solar System and the
                closest to the Sun. Its orbit around the Sun takes 87.97 Earth
                days, the shortest of all the Sun's planets. It is named after
                the Roman god Mercurius (Mercury), god of commerce, messenger of
                the gods, and mediator between gods and mortals, corresponding
                to the Greek god Hermes (Ἑρμῆς).
              </p>
            </div>
            <div className="w-1/4">
              <h2 className="text-m leading-loose text-center uppercase tracking-widest">
                Venus
              </h2>
              <Image
                src="/venus.jpg"
                className="mx-auto my-4"
                alt="Venus"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <p className="leading-relaxed">
                Venus is the second planet from the Sun. It is named after the
                Roman goddess of love and beauty. As the brightest natural
                object in Earth's night sky after the Moon, Venus can cast
                shadows and can be, on rare occasions, visible to the naked eye
                in broad daylight. Venus lies within Earth's orbit, and so never
                appears to venture far from the Sun, either setting in the west
                just after dusk or rising in the east a little while before
                dawn.
              </p>
            </div>
            <div className="w-1/4">
              <h2 className="text-m leading-loose text-center uppercase tracking-widest">
                Earth
              </h2>
              <Image
                src="/earth.jpg"
                className="mx-auto my-4"
                alt="Earth"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <p className="leading-relaxed">
                Earth is the third planet from the Sun and the only astronomical
                object known to harbour and support life. About 29.2% of Earth's
                surface is land consisting of continents and islands. The
                remaining 70.8% is covered with water, mostly by oceans, seas,
                gulfs, and other salt-water bodies, but also by lakes, rivers,
                and other freshwater, which together constitute the hydrosphere.
              </p>
            </div>
            <div className="w-1/4">
              <h2 className="text-m leading-loose text-center uppercase tracking-widest">
                Mars
              </h2>
              <Image
                src="/mars.jpg"
                className="mx-auto my-4"
                alt="Mars"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <p className="leading-relaxed">
                Mars is the fourth planet from the Sun and the second-smallest
                planet in the Solar System, being larger than only Mercury. In
                English, Mars carries the name of the Roman god of war and is
                often referred to as the "Red Planet". The latter refers to the
                effect of the iron oxide prevalent on Mars's surface, which
                gives it a reddish appearance (as shown), that is distinctive
                among the astronomical bodies visible to the naked eye.
              </p>
            </div>
            <div className="w-1/4">
              <h2 className="text-m leading-loose text-center uppercase tracking-widest">
                Jupiter
              </h2>
              <Image
                src="/jupiter.jpg"
                className="mx-auto my-4"
                alt="Jupiter"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <p className="leading-relaxed">
                Jupiter is the fifth planet from the Sun and the largest in the
                Solar System. It is a gas giant with a mass more than two and a
                half times that of all the other planets in the Solar System
                combined, but slightly less than one-thousandth the mass of the
                Sun. Jupiter is the third-brightest natural object in the
                Earth's night sky after the Moon and Venus. It has been observed
                since pre-historic times and is named after the Roman god
                Jupiter, the king of the gods, because of its observed size.
              </p>
            </div>
            <div className="w-1/4">
              <h2 className="text-m leading-loose text-center uppercase tracking-widest">
                Saturn
              </h2>
              <Image
                src="/saturn.jpg"
                className="mx-auto my-4"
                alt="Saturn"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <p className="leading-relaxed">
                Saturn is the sixth planet from the Sun and the second-largest
                in the Solar System, after Jupiter. It is a gas giant with an
                average radius of about nine and a half times that of Earth. It
                only has one-eighth the average density of Earth; however, with
                its larger volume, Saturn is over 95 times more massive. Saturn
                is named after the Roman god of wealth and agriculture. Its
                astronomical symbol (♄) has been traced back to the Greek
                Oxyrhynchus Papyri, where it can be seen to be a Greek kappa-rho
                with a cross-bar, as an abbreviation for Κρονος (Cronos), the
                Greek name for the planet. It later came to look like a
                lower-case Greek eta, with the cross added at the top in the
                16th century.
              </p>
            </div>
            <div className="w-1/4">
              <h2 className="text-m leading-loose text-center uppercase tracking-widest">
                Uranus
              </h2>
              <Image
                src="/uranus.jpg"
                className="mx-auto my-4"
                alt="Uranus"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <p className="leading-relaxed">
                Uranus is the seventh planet from the Sun. Its name is a
                reference to the Greek god of the sky, Uranus, who, according to
                Greek mythology, was the great-grandfather of Ares (Mars),
                grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It
                has the third-largest planetary radius and fourth-largest
                planetary mass in the Solar System. Uranus is similar in
                composition to Neptune, and both have bulk chemical compositions
                which differ from that of the larger gas giants Jupiter and
                Saturn.
              </p>
            </div>
            <div className="w-1/4">
              <h2 className="text-m leading-loose text-center uppercase tracking-widest">
                Neptune
              </h2>
              <Image
                src="/neptune.jpg"
                className="mx-auto my-4"
                alt="Neptune"
                width="100%"
                height="100%"
                layout="responsive"
              />
              <p className="leading-relaxed">
                Neptune is the eighth and farthest-known Solar planet from the
                Sun. In the Solar System, it is the fourth-largest planet by
                diameter, the third-most-massive planet, and the densest giant
                planet. It is 17 times the mass of Earth, slightly more massive
                than its near-twin Uranus. Neptune is denser and physically
                smaller than Uranus because its greater mass causes more
                gravitational compression of its atmosphere.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
