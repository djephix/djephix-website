import { ShoppingCart } from "iconsax-react";
import Image from "next/image";
import { DiGithubBadge } from "react-icons/di";
import apps from "./../images/apps.png";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <main>
      <div className="fixed top-0 left-0 w-full p-4 z-20">
        <div className="h-16 bg-card shadow-2xl shadow-shadow rounded-full flex w-full items-center"></div>
      </div>
      <div className="min-h-screen hero">
        <div className="z-10 absolute top-0 left-0 w-full h-full py-24 px-8 flex flex-col-reverse md:flex-row items-center justify-around">
          <div className="w-full md:w-[50%] text-center md:text-left">
            <motion.h1
              initial={{
                opacity: 0,
                y: -24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="font-extrabold text-4xl md:text-5xl xl:text-8xl leading-normal mb-4"
            >
              All your IT solutions
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: -24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="leading-normal mb-4"
            >
              All your digital software solutions are with us. Software products
              created by our professional developer team.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: -24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="flex gap-4"
            >
              <button className="flex items-center space-x-4 bg-primary text-primary-foreground rounded font-bold px-6 h-16 shadow">
                <ShoppingCart size={32} /> <span>Choose a product</span>
              </button>

              <button className="bg-secondary text-secondary-foreground rounded font-bold flex items-center justify-center w-16 h-16 shadow text-4xl">
                {/* <Git */}
                <DiGithubBadge />
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full md:w-[40%]"
          >
            <Image src={apps} alt="apps" className="" />
          </motion.div>
        </div>
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aut,
        totam voluptatibus alias distinctio aperiam a, iusto quos facere
        veritatis soluta consectetur ducimus sapiente eius dicta dolor, odio ex.
        Aliquid!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sequi a laborum aliquam nostrum laboriosam voluptatum officia, ullam
        ipsa cumque ducimus aperiam minus rem non asperiores quisquam expedita
        beatae aliquid quasi!ias distinctio aperiam a, iusto quos facere
        veritatis soluta consectetur ducimus sapiente eius dicta dolor, odio ex.
        Aliquid!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sequi a laborum aliquam nostrum laboriosam voluptatum officia, ullam
        ipsa cumque ducimus aperiam minus rem non asperiores quisquam expedita
        beatae aliquid quasi!ias distinctio aperiam a, iusto quos facere
        veritatis soluta consectetur ducimus sapiente eius dicta dolor, odio ex.
        Aliquid!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sequi a laborum aliquam nostrum laboriosam voluptatum officia, ullam
        ipsa cumque ducimus aperiam minus rem non asperiores quisquam expedita
        beatae aliquid quasi!ias distinctio aperiam a, iusto quos facere
        veritatis soluta consectetur ducimus sapiente eius dicta dolor, odio ex.
        Aliquid!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sequi a laborum aliquam nostrum laboriosam voluptatum officia, ullam
        ipsa cumque ducimus aperiam minus rem non asperiores quisquam expedita
        beatae aliquid quasi!ias distinctio aperiam a, iusto quos facere
        veritatis soluta consectetur ducimus sapiente eius dicta dolor, odio ex.
        Aliquid!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sequi a laborum aliquam nostrum laboriosam voluptatum officia, ullam
        ipsa cumque ducimus aperiam minus rem non asperiores quisquam expedita
        beatae aliquid quasi!ias distinctio aperiam a, iusto quos facere
        veritatis soluta consectetur ducimus sapiente eius dicta dolor, odio ex.
        Aliquid!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sequi a laborum aliquam nostrum laboriosam voluptatum officia, ullam
        ipsa cumque ducimus aperiam minus rem non asperiores quisquam expedita
        beatae aliquid quasi!ias distinctio aperiam a, iusto quos facere
        veritatis soluta consectetur ducimus sapiente eius dicta dolor, odio ex.
        Aliquid!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sequi a laborum aliquam nostrum laboriosam voluptatum officia, ullam
        ipsa cumque ducimus aperiam minus rem non asperiores quisquam expedita
        beatae aliquid quasi!ias distinctio aperiam a, iusto quos facere
        veritatis soluta consectetur ducimus sapiente eius dicta dolor, odio ex.
        Aliquid!Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sequi a laborum aliquam nostrum laboriosam voluptatum officia, ullam
        ipsa cumque ducimus aperiam minus rem non asperiores quisquam expedita
        beatae aliquid quasi!
      </div>
    </main>
  );
}
