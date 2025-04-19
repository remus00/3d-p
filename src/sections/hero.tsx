import { Button } from '../components/button';
import { HeroExperience } from '../components/hero-models/hero-experience';
import { words } from '../constants';

export const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="./images/bg.png" alt="background" />
            </div>
            <div className="hero-layout">
                {/* Left side */}
                <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping{' '}
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, idx) => (
                                            <span
                                                key={idx}
                                                className="flex items-center gap-1 pb-2 md:gap-3"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>

                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 pointer-events-none relative z-10 md:text-xl">
                            Hi, I'm Remus, a developer based in Italy with a passion for
                            code.
                        </p>
                        <Button
                            className="h-12 w-60 md:h-16 md:w-80"
                            id="button"
                            text="See my work"
                        />
                    </div>
                </header>

                {/* right side */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    );
};
