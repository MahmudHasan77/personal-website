"use client";
import { CgMenuHotdog } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdLightMode } from "react-icons/md";
import { Roboto_Condensed } from "next/font/google";
import { RxCross2 } from "react-icons/rx";
import { MdAttachEmail } from "react-icons/md";
import { FaPenClip } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { FcOk } from "react-icons/fc";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { RiLoader3Fill } from "react-icons/ri";
const neue = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

import { MdDarkMode } from "react-icons/md";
const portfolios = [
  {
    id: 1,
    img: "/first-e-commerce-website.jpg",
    link: "https://mahmud-practice-shop.netlify.app",
    title: "Full Stack E-commerce website",
    description:
      "A fully functional e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes product management, shopping cart, user authentication, order tracking, and secure payment integration. Designed with a modern UI and responsive layout for seamless user experience across all devices.",
  },
  {
    id: 2,
    img: "/blog Next js .png",
    link: "https://quran-sunnah-phi.vercel.app",
    title: "Full Stack Blog website",
    description:
      "This is a dynamic blog website developed using the MERN stack and Next js  (MongoDB, Express.js, React.js, Node.js). Users can register, log in, and manage their own posts. The admin can monitor and control all articles. It includes features like post search, category filters, comment system, and responsive design for all devices.",
  },
  {
    id: 3,
    img: "/marriage Next js .png",
    link: "https://test-demo-gamma.vercel.app",
    title: "Home Page Development",
    description:
      "This is a Home page with animation using the MERN stack and Next js (HTML , CSS , Tailwind CSS ,JavaScript , Next js )  comment system, and responsive design for all devices.",
  },
  {
    id: 4,
    img: "/first-demo.jpg",
    link: "",
    title: "Test Demo Template ",
    description:
      "This is a Test Demo Template using HTML , CSS , Tailwind CSS , Bootstrap ,comment system, and responsive design for all devices.",
  },
];
interface Ripple {
  x: number;
  y: number;
  id: number;
}
const Home = () => {
  const [themMode, setThemMode] = useState("dark");
  useEffect(() => {
    setThemMode(localStorage.getItem("them") || "dark");
  }, []);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isStart, setStart] = useState(false);
  const [sendStatus, setSendStatus] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const [startAbout, setStartAbout] = useState(false);
  const [aboutPara1, setAboutPara1] = useState(false);
  const aboutPara1Ref = useRef<HTMLDivElement>(null);
  const [aboutPara2, setAboutPara2] = useState(false);
  const aboutPara2Ref = useRef<HTMLDivElement>(null);
  const [aboutPara3, setAboutPara3] = useState(false);
  const aboutPara3Ref = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const [aboutPara4, setAboutPara4] = useState(false);
  const aboutPara4Ref = useRef<HTMLDivElement>(null);
  const messageBtnRef = useRef<HTMLDivElement>(null);
  const [messageBtn, setMessageBtn] = useState(false);
  const [isSocialIcon, setSocialIcon] = useState(false);
  const [startSkill, setStartSkill] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isService1, setService1] = useState(false);
  const service1Ref = useRef<HTMLDivElement>(null);
  const [isService2, setService2] = useState(false);
  const service2Ref = useRef<HTMLDivElement>(null);
  const [isService3, setService3] = useState(false);
  const service3Ref = useRef<HTMLDivElement>(null);
  const [isService4, setService4] = useState(false);
  const service4Ref = useRef<HTMLDivElement>(null);
  const [isService5, setService5] = useState(false);
  const service5Ref = useRef<HTMLDivElement>(null);
  const [isService6, setService6] = useState(false);
  const service6Ref = useRef<HTMLDivElement>(null);
  const [isService7, setService7] = useState(false);
  const service7Ref = useRef<HTMLDivElement>(null);
  const [isService8, setService8] = useState(false);
  const service8Ref = useRef<HTMLDivElement>(null);
  const [isService9, setService9] = useState(false);
  const service9Ref = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(false);
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [click, setClick] = useState({
    name: false,
    email: false,
    message: false,
  });
  const nameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const [contactInfo, setContactInfo] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  const [showDetails, setShowDetails] = useState<{
    id: number;
    title: string;
    img: string;
    link: string;
    description: string;
  }>();
  const handleThem = () => {
    setThemMode(themMode === "dark" ? "light" : "dark");
    localStorage.setItem("them", themMode === "dark" ? "light" : "dark");
  };

  const navigation = [
    { nav: "Home", link: "#home" },
    { nav: "About", link: "#about" },
    { nav: "Skills", link: "#skills" },
    { nav: "Services", link: "#service" },
    { nav: "Portfolio", link: "#portfolio" },
    { nav: "Contact me", link: "#contact" },
  ];
  useEffect(() => {
    const currentDiv = heroRef.current;
    if (!currentDiv) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStart(true);
      }
    });

    if (currentDiv) {
      observer.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        observer.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = aboutRef.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAbout(true);
        } else {
          setStartAbout(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = aboutPara1Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutPara1(true);
        } else {
          setAboutPara1(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = aboutPara2Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutPara2(true);
        } else {
          setAboutPara2(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = aboutPara3Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutPara3(true);
        } else {
          setAboutPara3(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = aboutPara4Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutPara4(true);
        } else {
          setAboutPara4(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = skillRef.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartSkill(true);
        } else {
          setStartSkill(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service1Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService1(true);
        } else {
          setService1(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service2Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService2(true);
        } else {
          setService2(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service3Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService3(true);
        } else {
          setService3(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service4Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService4(true);
        } else {
          setService4(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service5Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService5(true);
        } else {
          setService5(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service6Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService6(true);
        } else {
          setService6(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service7Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService7(true);
        } else {
          setService7(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service8Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService8(true);
        } else {
          setService8(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = service9Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService9(true);
        } else {
          setService9(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = messageBtnRef.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMessageBtn(true);
        } else {
          setMessageBtn(false);
        }
      },
      { rootMargin: "-10% -10%" }
    );
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const currentDiv = socialIconsRef.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSocialIcon(true);
      } else {
        setSocialIcon(false);
      }
    });
    if (currentDiv) {
      handleObserve.observe(currentDiv);
    }
    return () => {
      if (currentDiv) {
        handleObserve.unobserve(currentDiv);
      }
    };
  }, []);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (nameRef.current && !nameRef.current.contains(e.target as Node)) {
        setClick((prev) => ({ ...prev, name: false }));
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (emailRef.current && !emailRef.current.contains(e.target as Node)) {
        setClick((prev) => ({ ...prev, email: false }));
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        messageRef.current &&
        !messageRef.current.contains(e.target as Node)
      ) {
        setClick((prev) => ({ ...prev, message: false }));
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples([...ripples, { x, y, id }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  // const handleSend = async () => {
  //   if (
  //     contactInfo.name.trim().length < 2 ||
  //     contactInfo.email.trim() === "" ||
  //     contactInfo.message.trim().length < 10
  //   )
  //     return;

  //   try {
  //     setSendStatus("sending");
  //     const res = await fetch("/api", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(contactInfo),
  //     });
  //     const data = await res.json();
  //     if (res.ok) {
  //       setSendStatus("sent");

  //       setContactInfo({ name: "", email: "", message: "" });
  //     } else {
  //       setSendStatus("error");
  //       console.error(data);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setSendStatus("error");
  //   }
  // };

  if (themMode === "") return;
  return (
    <div
      onClick={handleClick}
      className={`   ${
        themMode && themMode === "dark"
          ? "dark dark:bg-gray-800 text-white "
          : "bg-gray-100 text-black "
      }
       transition-all duration-500`}
    >
      <header className="flex justify-between  backdrop-blur-lg items-center py-2 px-10 md:px-20 sticky top-0 z-50 bg-white/70 text-black duration-500 dark:bg-gray-800/70 shadow w-full dark:border-b border-yellow-300/20">
        <div className="flex">
          <button onClick={() => setShowNav(!showNav)}>
            <CgMenuHotdog className="cursor-pointer text-2xl md:hidden text-yellow-300 hover:scale-110 hover:text-yellow-400 duration-300" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <a href="#home">
            <Image
              src="/logo.png"
              alt="logo image"
              width={50}
              height={50}
              priority
              style={{ width: "auto", height: "auto" }}
              className="object-cover"
            />
          </a>
        </div>

        {/* desktop  navigation  */}
        <div
          className={`md:flex gap-5 hidden flex-1 mx-auto justify-center items-center dark:text-[#ffd900] text-[#806c00]  ${neue.className}`}
        >
          {navigation.map((nav, i) => {
            return (
              <span key={i} className="hover:scale-110 duration-300">
                <a href={nav.link}>{nav.nav}</a>
              </span>
            );
          })}
        </div>
        <div className="flex">
          <button>
            <MdDarkMode
              onClick={handleThem}
              className="text-2xl border border-zinc-400 rounded-full p-[2px] bg-gray-300 dark:hidden text-gray-500 cursor-pointer hover:rotate-360 duration-300 hover:scale-110"
            />
          </button>
          <button>
            <MdLightMode
              onClick={handleThem}
              className="hidden dark:inline text-2xl border rounded-full p-[1px]  text-yellow-500 dark:bg-white cursor-pointer hover:rotate-360 duration-300 hover:scale-110"
            />
          </button>
        </div>
      </header>
      <div>
        {/* toggle navigation */}
        <div
          className={`md:hidden ${
            showNav ? "translate-y-0 h-65" : "h-0 -translate-y-60"
          }  flex flex-col gap-3 px-10 fixed top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900  duration-500 transition-all w-full border-b border-zinc-300 z-40 dark:text-[#ffd900] text-green-600 pt-9 ${
            neue.className
          }`}
        >
          {navigation.map((nav, i) => {
            return (
              <a
                onClick={() => setShowNav(false)}
                href={nav.link}
                key={i}
                className="border-b border-green-100 hover:border-green-300 hover:dark:border-yellow-50 dark:border-yellow-50/20 flex items-center group duration-300"
              >
                <div className="w-2 h-2 border rounded-full group-hover:bg-green-500 dark:group-hover:bg-yellow-500 duration-300" />

                <span className="pl-5 group-hover:scale-105"> {nav.nav}</span>
              </a>
            );
          })}
        </div>
      </div>
      {/* Hero Section */}
      <main
        ref={heroRef}
        id="home"
        className="scroll-mt-28 mt-10 md:my-10 my-5  overflow-x-hidden"
      >
        {/* logo small screen */}
        <div className="flex justify-center md:justify-around gap-10">
          <div
            className={` ${
              isStart
                ? "translate-x-0 opacity-100"
                : "opacity-0 translate-x-[250%] md:translate-x-[1000%]"
            } duration-3000 h-7 w-7 md:h-10 md:w-10 relative topLogoLeft`}
          >
            <Image
              src={"/TypeScript-Logo.jpg"}
              fill
              alt="typeScript logo"
              className="rounded-full  logoShadow dark:shadow-none!"
              priority
            />
          </div>
          <div
            className={` h-7 w-7 md:h-10 md:w-10 relative duration-3000 topLogoMiddle ${
              isStart ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={"/react-logo.png"}
              fill
              alt="typeScript logo"
              className="rounded-full  logoShadow dark:shadow-none! bg-white"
              priority
            />
          </div>
          <div
            className={`h-7 w-7 md:h-10 md:w-10 relative duration-3000 topLogoRight ${
              isStart
                ? "translate-x-0 opacity-100"
                : "-translate-x-[250%] md:-translate-x-[1000%] opacity-0"
            }`}
          >
            <Image
              src={"/next-js-logo.png"}
              fill
              alt="typeScript logo"
              priority
              className="rounded-full  logoShadow dark:shadow-none!"
            />
          </div>
        </div>

        {/* name */}
        <div className="flex justify-around  items-center">
          <div
            className={`hidden md:inline duration-3000 ${
              isStart
                ? "translate-x-0 opacity-100"
                : "translate-x-[1000%] opacity-0"
            }`}
          >
            <Image
              src={"/node-js-logo.png"}
              width={50}
              height={50}
              alt="node js"
              className="rounded-full nodeLogo logoShadow dark:shadow-none!"
            />
          </div>
          <div className="text-center px-4 my-10 overflow-hidden  flex justify-center items-center gap-5">
            <Image
              src={"/sparkling.png"}
              height={15}
              width={15}
              alt="sparkling"
              className={` ${
                isStart
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              } duration-3000 object-contain rotate-45 sparklingLeft`}
            />
            <div>
              <h1
                className={`${neue.className} text-2xl md:text-3xl lg:text-4xl font-bold `}
              >
                Hi, I&apos;m{" "}
                <span
                  className={`
              inline-block font-extrabold dark:text-yellow-300 text-yellow-600
            `}
                >
                  Mahmud Hasan
                </span>
              </h1>
              <p className="text-sm"> Web Engineer </p>
            </div>
            <Image
              src={"/sparkling.png"}
              height={15}
              width={15}
              alt="sparkling"
              className={` ${
                isStart
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              } duration-3000 object-contain rotate-45 sparklingRight`}
            />
          </div>
          <div
            className={`hidden md:inline duration-3000 ${
              isStart
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-[1000%]"
            }`}
          >
            <Image
              src={"/mongodb-logo.png"}
              width={50}
              height={50}
              alt="node js"
              className="rounded-full mongoLogo logoShadow dark:shadow-none!"
            />
          </div>
        </div>

        {/* small screen icons */}
        <div className="flex justify-center md:hidden gap-10">
          <Image
            src={"/node-js-logo.png"}
            width={30}
            height={30}
            alt="node js"
            className={`rounded-full nodeLogoSmall logoShadow dark:shadow-none! duration-3000 ${
              isStart
                ? "translate-x-0 opacity-100"
                : "-translate-x-[500%] opacity-0"
            }`}
          />
          <Image
            src={"/mongodb-logo.png"}
            width={30}
            height={30}
            alt="node js"
            className={`rounded-full mongoLogoSmall logoShadow dark:shadow-none! duration-3000 ${
              isStart
                ? "translate-x-0 opacity-100"
                : "translate-x-[500%] opacity-0"
            }`}
          />
        </div>

        {/* introduction */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3  my-5 gap-y-10 ">
          <div
            className={`duration-3000 justify-center hidden lg:flex  ${
              isStart
                ? "translate-x-[0%]  opacity-100"
                : "translate-x-[100%] opacity-0"
            }`}
          >
            <div className={`relative h-70 w-85 imageAnimate `}>
              <Image
                src={"/Node-Js (1).png"}
                fill
                alt="website image"
                priority
                className="object-contain"
              />
            </div>
          </div>
          <div
            className={` text-center text-lg md:text-xl  text-yellow-900 dark:text-yellow-400 px-7 mb-5 md:flex lg:inline duration-3000 items-center 
               ${neue.className} ${
              isStart
                ? "translate-y-0 opacity-100"
                : "translate-y-[100%] opacity-0"
            }`}
          >
            I&apos;m a full Stack Web Developer . I love creating clean,
            responsive, modern, and user-friendly web applications .
          </div>

          <div
            className={`duration-3000 flex justify-center  ${
              isStart
                ? "translate-x-[0%] opacity-100"
                : "-translate-x-[100%] opacity-0"
            }`}
          >
            <div className={`relative h-50 w-65 md:h-70 lg:w-85  imageAnimate`}>
              <Image
                src={"/Nodejs-Application.png"}
                fill
                alt="website image"
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      {/* about me  */}
      <section
        id="about"
        ref={aboutRef}
        className={` scroll-mt-20 my-15 border border-zinc-300/50   dark:border-white/10 rounded-xl text-center flex flex-col items-center gap-3 w-[90%] mx-auto px-3 md:px-10 lg:px-30  py-5 pb-10 lg:pb-15 whiteShadow duration-1000 bg-[#d5dafd31] overflow-hidden`}
      >
        <h1 className="font-bold text-2xl text-center  animateText">
          About me
        </h1>
        <div
          className={`${
            startAbout ? "scale-100 duration-500" : "scale-0"
          } w-52 h-52 my-7 md:w-90 md:h-90  rounded-full overflow-hidden `}
        >
          <Image
            src={"/author.jpg"}
            height={0}
            width={200}
            style={{ height: "auto", width: "100%" }}
            priority
            alt="author image"
            className="object-cover  rotate-1"
          />
        </div>

        <div ref={aboutPara1Ref} className="overflow-hidden">
          <p
            className={`${
              aboutPara1
                ? "translate-x-0 opacity-100"
                : "translate-x-[100%] opacity-0"
            } duration-500`}
          >
            Hi, I’m <strong>Muhammad Hasan</strong>, a passionate Full Stack Web
            Developer who loves turning ideas into interactive, modern, and
            responsive web experiences. I specialize in building clean,
            efficient, and user-focused applications using MERN Stack and
            Next.js.
          </p>
        </div>
        <div ref={aboutPara2Ref} className="overflow-hidden">
          <p
            className={`${
              aboutPara2
                ? "translate-x-0 opacity-100"
                : "-translate-x-[100%] opacity-0"
            } duration-500`}
          >
            With every project, my goal is simple — to write clean code, create
            intuitive designs, and deliver smooth, high-performance web
            solutions that make a difference.
          </p>
        </div>
        <div ref={aboutPara3Ref} className="overflow-hidden">
          <p
            className={`${
              aboutPara3
                ? "translate-x-0 opacity-100"
                : "translate-x-[100%] opacity-0"
            } duration-500`}
          >
            I enjoy learning new technologies, improving my skills every day,
            and collaborating with others to bring creative visions to life.
          </p>
        </div>
        <div ref={aboutPara4Ref} className="overflow-hidden">
          <p
            className={`${
              aboutPara4
                ? "translate-x-0 opacity-100"
                : "-translate-x-[100%] opacity-0"
            } duration-500`}
          >
            When I’m not coding, I love exploring new design trends and thinking
            about how technology can make people’s lives easier.
          </p>
        </div>
      </section>

      {/* skills */}
      <section
        ref={skillRef}
        id="skills"
        className="scroll-mt-20 overflow-hidden my-15 border border-zinc-300/50 dark:border-white/10 rounded-xl w-[90%] mdw-[50%] mx-auto whiteShadow duration-500 skillBg text-sm pb-7 pt-5 px-1"
      >
        <h1 className="font-bold text-2xl text-center pb-5 animateText">
          Skills
        </h1>
        <p
          className={`${
            startSkill
              ? "opacity-100 translate-y-0"
              : "-translate-y-[100%] opacity-0"
          } max-w-80 duration-500 md:max-w-100 px-5 text-center mx-auto text-black/70 dark:text-white/70`}
        >
          Here are the technologies and tools I work with to bring ideas to life
          and build efficient, scalable web applications.
        </p>
        <div className="flex my-5 gap-x-2 gap-y-5 md:gap-5 flex-wrap justify-around dark:text-white">
          {/* html  */}
          <div
            className={`duration-500 h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillScale1`}
          >
            <Image
              src={"/html-logo.webp"}
              width={100}
              height={100}
              alt="HTML"
              priority
            />
            <p>HTML</p>
          </div>

          {/* css  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillTranslate1">
            <Image
              src={"/css-logo.webp"}
              width={100}
              height={100}
              alt=" CSS"
              priority
            />
            <p>CSS</p>
          </div>

          {/* tailwind css  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillScale2">
            <Image
              src={"/tailwindCSS.png"}
              width={100}
              height={100}
              alt="Tailwind CSS"
              priority
            />
            <p className="text-xs pt-1">Tailwind CSS</p>
          </div>

          {/* Bootstrap */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillTranslate2">
            <Image
              src={"/bootstrap.png"}
              width={100}
              height={100}
              alt="bootstrap"
              priority
            />
            <p>Bootstrap</p>
          </div>

          {/* javaScript */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillScale1">
            <Image
              src={"/javaScript.png"}
              width={100}
              height={100}
              alt="javaScript"
              priority
            />
            <p>JavaScript</p>
          </div>

          {/* TypeScript */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillTranslate1">
            <Image
              src={"/ts.png"}
              width={100}
              height={100}
              alt="TypeScript"
              priority
            />
            <p>TypeScript</p>
          </div>

          {/* React js */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillScale2">
            <Image
              src={"/react-logo.png"}
              width={100}
              height={100}
              alt="React js"
              priority
            />
            <p>React js</p>
          </div>

          {/* jquery */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillTranslate2">
            <Image
              src={"/Jquery.png"}
              width={100}
              height={100}
              alt="JQuery"
              priority
            />
            <p>JQuery</p>
          </div>

          {/* next js  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillScale1">
            <Image
              src={"/next-js.webp"}
              width={100}
              height={100}
              alt="Next js"
              priority
            />
            <p>Next js</p>
          </div>

          {/* redux  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillTranslate1">
            <Image
              src={"/redux-logo.png"}
              width={100}
              height={100}
              alt="Redux"
              priority
            />
            <p>Redux</p>
          </div>

          {/* node js  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillScale2">
            <Image
              src={"/node-js-logo.png"}
              width={100}
              height={100}
              alt="Node js"
              priority
            />
            <p>Node js</p>
          </div>

          {/* Express js  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillTranslate2">
            <Image
              src={"/express_js.jpeg"}
              width={100}
              height={100}
              alt="Express js"
              priority
              className="rounded-full"
            />
            <p>Express js</p>
          </div>

          {/* git  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillScale1">
            <Image
              src={"/git.png"}
              width={100}
              height={100}
              alt="Git"
              priority
            />
            <p>Git</p>
          </div>

          {/* Git Hub  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillTranslate1">
            <Image
              src={"/github.png"}
              width={100}
              height={100}
              alt="Git Hub"
              priority
            />
            <p>Git Hub</p>
          </div>

          {/* firebase  */}
          <div className="h-30 w-25 flex flex-col justify-center items-center border border-zinc-200 dark:border-zinc-600 p-2 font-semibold rounded-md  skillCardBg skillScale2">
            <Image
              src={"/firebase.png"}
              width={100}
              height={100}
              alt="firebase"
              priority
              className="rounded-full p-[1px]"
            />
            <p>Firebase</p>
          </div>
        </div>
      </section>

      {/* services */}
      <section
        id="service"
        className="scroll-mt-20 my-15 border border-zinc-300/50   dark:border-white/10 rounded-xl w-[90%] mx-auto  bg-[#d5dafd31] whiteShadow"
      >
        <h1 className="text-center flex justify-center items-center gap-4 py-5">
          <span className="text-xl">
            <MdOutlineSettingsSuggest className="serviceIcon" />
          </span>
          <span className="font-bold text-2xl text-center  animateText">
            Services
          </span>
        </h1>
        <div className="flex p-2 flex-wrap gap-5 justify-around">
          <div className={`overflow-hidden`} ref={service1Ref}>
            <div
              className={`${
                isService1
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }  w-[100%] mx-auto md:w-90 text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟢 Full Stack Web Development
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I develop complete, dynamic, and responsive web applications
                using MERN Stack and Next.js — from concept to deployment.I
                ensure every project is well-structured, fast, and scalable.
              </p>
            </div>
          </div>
          <div className={`overflow-hidden`} ref={service2Ref}>
            <div
              className={`${
                isService2
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">🔵 Frontend Development </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I create modern and interactive UIs with React.js, Tailwind CSS,
                and Material UI, ensuring seamless experiences across all
                devices.
              </p>
            </div>
          </div>
          <div className={`overflow-hidden`} ref={service3Ref}>
            <div
              className={`${
                isService3
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }   w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">🟣 Backend Development </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I build secure and efficient server-side systems using Node.js,
                Express.js, and MongoDB, focusing on clean architecture and API
                performance.
              </p>
            </div>
          </div>
          <div className={`overflow-hidden`} ref={service4Ref}>
            <div
              className={`${
                isService4
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟠 Authentication & Authorization
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I implement secure authentication systems using technologies
                like JWT, bcrypt, and OAuth, ensuring user data privacy and
                reliable access control.
              </p>
            </div>
          </div>
          <div className={`overflow-hidden`} ref={service5Ref}>
            <div
              className={`${
                isService5
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">🟡 Hosting & Deployment </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I handle hosting, domain setup, and deployment on platforms like
                Vercel, Render, and Netlify, making sure your app runs smoothly
                in production.
              </p>
            </div>
          </div>
          <div className={`overflow-hidden`} ref={service6Ref}>
            <div
              className={`${
                isService6
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟤 Database Design & Management
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I design and optimize databases for better data handling,
                ensuring speed, scalability, and security in every project.
              </p>
            </div>
          </div>
          <div className={`overflow-hidden`} ref={service7Ref}>
            <div
              className={`${
                isService7
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">🔵 API Integration </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I integrate third-party APIs (like Payment, Email, and
                Authentication APIs) to extend your web app’s functionality and
                efficiency.
              </p>
            </div>
          </div>
          <div className={`overflow-hidden`} ref={service8Ref}>
            <div
              className={`${
                isService8
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }   w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟣 Maintenance & Optimization
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I provide website updates, bug fixes, and performance
                improvements to keep your project secure, fast, and reliable
                over time.
              </p>
            </div>
          </div>
          <div className={`overflow-hidden`} ref={service9Ref}>
            <div
              className={`${
                isService9
                  ? "translate-y-0 duration-300"
                  : "translate-y-[50%] opacity-0"
              }   w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟢 Search Engine Optimization (SEO)
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I optimize websites for better visibility and ranking on search
                engines. From clean code structure and fast performance to
                proper meta tags and on-page SEO techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio */}
      <section
        id="portfolio"
        className="scroll-mt-20 my-15 p5  border border-zinc-300/50   dark:border-white/10 rounded-md bg-[#9799ac2f] whiteShadow py-10"
      >
        <h1 className="font-bold text-2xl text-center pb-5 animateText">
          Website List
        </h1>
        <div className="sm:flex flex-wrap gap-5 justify-center">
          {portfolios.map((port, index) => {
            return (
              <div
                key={index}
                className="border border-zinc-300   dark:border-white/30 whiteShadow w-[80%] md:w-70 mx-auto rounded-md my-5"
              >
                <div className="relative w-full h-80 portfolioBox rounded-t-md overflow-y-auto">
                  <Image
                    src={port.img}
                    priority
                    height={0}
                    width={280}
                    style={{ height: "auto", width: "100%" }}
                    alt={port.title}
                  />
                </div>
                <h1 className="font-semibold text-center pt-5  mt-1">
                  {port.title}
                </h1>
                <div className="flex justify-around py-5">
                  <div
                    className="border border-zinc-300   dark:border-white/30 hover:bg-yellow-300 hover:text-white text-sm py-1.5 w-30 text-center rounded cursor-pointer dark:bg-white bg-gray-500 duration-300 text-white dark:text-black whiteShadow"
                    onClick={() => {
                      setShowDetails(port);
                      setDetailsOpen(true);
                    }}
                  >
                    View Details
                  </div>
                  <div className="border border-zinc-300   dark:border-white/30 hover:bg-yellow-300 hover:text-white text-sm py-1.5 w-30 text-center rounded cursor-pointer dark:bg-white bg-gray-500 duration-300 text-white dark:text-black whiteShadow">
                    <a href={port.link}>View website</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* details toggle */}
      {showDetails && isDetailsOpen && (
        <div
          className={
            "mt-20 mb-5 w-[90%] md:w-[70%] mx-auto fixed inset-0 border border-zinc-300   dark:border-white/30 rounded overflow-y-auto detailsScroll bg-white dark:bg-gray-800 z-10"
          }
        >
          <div className="flex justify-center">
            <button
              onClick={() => setDetailsOpen(false)}
              className="py-2 px-5 bg-white whiteShadow hover:bg-red-500 hover:text-white text-red-500 rounded-md m-3 duration-300"
            >
              <RxCross2 />
            </button>
          </div>
          <div className="relative w-full">
            <Image
              src={showDetails.img}
              width={200}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt={showDetails.title}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3 p-3 text-center">
            <h1 className="font-semibold">{showDetails.title}</h1>
            <p className="dark:text-gray-300 text-gray-700">
              {showDetails.description}
            </p>
          </div>
        </div>
      )}
      {/* contact */}
      <section
        id="contact"
        className="scroll-mt-20 border border-zinc-300/50   dark:border-white/10 bg-[#d5dafd31] whiteShadow w-[90%] md:w-md lg:w-lg mx-auto rounded-md my-5 py-10 px-5 flex flex-col gap-y-10 duration-500 "
      >
        <h1 className="font-bold text-lg animateText text-center">
          Contact me with Gmail Account
        </h1>
        {/* name */}
        <div
          onClick={() => setClick((prev) => ({ ...prev, name: true }))}
          ref={nameRef}
          className={`border border-zinc-300   dark:border-white/30 h-10 text-black bg-white dark:bg-gray-400 w-full rounded-md group relative`}
        >
          <span
            className={`absolute left-2 top-2 group-hover:-translate-y-8 text-black/50 group-hover:translate-x-10 ${
              click.name || contactInfo.name
                ? "-translate-y-8 translate-x-10 dark:text-white"
                : ""
            }  duration-500 dark:group-hover:text-white text-sm `}
          >
            Write your Name.
          </span>
          <span
            className={`absolute left-2 top-2 -translate-y-8 translate-x-10 duration-500 text-black/50 dark:text-white/50 text-sm `}
          >
            Write your Name.
          </span>
          <span
            className={` ${
              click.name || contactInfo.name ? "scale-130" : ""
            } group-hover:scale-130 duration-500 absolute -top-6 left-5 dark:text-white border-b border-dashed pb-0.5`}
          >
            <FaPenClip />
          </span>
          <input
            required
            value={contactInfo.name}
            onChange={(e) =>
              setContactInfo((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            className="w-full h-full outline-none px-2 dark:text-white"
          />
        </div>
        {/* email */}
        <div
          onClick={() => setClick((prev) => ({ ...prev, email: true }))}
          ref={emailRef}
          className={`border border-zinc-300   dark:border-white/30 h-10 text-black bg-white dark:bg-gray-400 w-full rounded-md group relative`}
        >
          <span
            className={`absolute left-2 top-2 group-hover:-translate-y-8 text-black/50 group-hover:translate-x-10 ${
              click.email || contactInfo.email
                ? "-translate-y-8 translate-x-10 dark:text-white"
                : ""
            }  duration-500 dark:group-hover:text-white text-sm `}
          >
            Write your Email.
          </span>
          <span
            className={`absolute left-2 top-2 -translate-y-8 translate-x-10 duration-500 text-black/50 dark:text-white/50 text-sm `}
          >
            Write your Email.
          </span>
          <span
            className={` ${
              click.email || contactInfo.email ? "scale-130" : ""
            } group-hover:scale-130 duration-500 absolute -top-6 left-5 dark:text-white`}
          >
            <MdAttachEmail />
          </span>
          <input
            required
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
            className="w-full h-full outline-none dark:text-white px-2"
          />
        </div>
        {/* message */}
        <div
          onClick={() => setClick((prev) => ({ ...prev, message: true }))}
          ref={messageRef}
          className={`border border-zinc-300   dark:border-white/30 min-h-30 text-black bg-white dark:bg-gray-400 w-full rounded-md group relative`}
        >
          <span
            className={`absolute left-2 top-2 group-hover:-translate-y-8 group-hover:translate-x-10 text-black/50  ${
              click.message || contactInfo.message
                ? "-translate-y-8 translate-x-10 dark:text-white"
                : ""
            }  duration-500 dark:group-hover:text-white text-sm `}
          >
            Write Message.
          </span>
          <span
            className={`absolute left-2 top-2 -translate-y-8 translate-x-10 duration-500 text-black/50 dark:text-white/50 text-sm `}
          >
            Write Message.
          </span>
          <span
            className={` ${
              click.message || contactInfo.message ? "scale-130" : ""
            } group-hover:scale-130 duration-500 absolute -top-6 left-5 dark:text-white`}
          >
            <RiMessage2Fill />
          </span>
          <textarea
            required
            value={contactInfo.message}
            onChange={(e) =>
              setContactInfo((prev) => ({ ...prev, message: e.target.value }))
            }
            className={
              "w-full min-h-30 max-h-100 dark:text-white px-3 outline-none"
            }
          />
        </div>
        <div
          className="flex justify-end px-5 overflow-hidden -translate-y-5"
          ref={messageBtnRef}
        >
          <div
            // onClick={handleSend}
            className={`${
              messageBtn ? "translate-x-0" : "-translate-x-[250%] opacity-0"
            } rounded-md w-42 duration-500  py-2 gap-3  font-semibold text-sm cursor-pointer text-white bg-gray-500 dark:bg-white dark:text-black/70 hover:bg-yellow-400 hover:text-black/70 flex justify-center items-center`}
          >
            <button className="text-center">Send Message</button>
            <span className="mt-1">
              {sendStatus === "" ? (
                <MdSend className="animate-pulse text-yellow-700" />
              ) : sendStatus === "sending" ? (
                <RiLoader3Fill className="animate-spin text-yellow-700" />
              ) : sendStatus === "sent" ? (
                <FcOk className="animate-pulse text-green-600" />
              ) : sendStatus === "error" ? (
                <MdOutlineReportGmailerrorred className="animate-pulse text-red-600" />
              ) : null}
            </span>
          </div>
        </div>

        {/* contact with social medea */}

        <div className="border-t  border-zinc-300   dark:border-white/30 pt-10">
          <h1 className="font-bold text-lg animateText">Contact with -</h1>

          <div className="flex mt-10 justify-center items-center gap-5">
            <a
              className={`${
                isSocialIcon
                  ? "translate-0 opacity-100"
                  : "translate-y-[55px] translate-x-[79px] opacity-0"
              } duration-300`}
              href="https://www.upwork.com/freelancers/~01f79fa3d73d7c8d81"
              target="blanket"
            >
              <Image
                src={"/upwork.png"}
                height={60}
                width={60}
                alt="upwork image"
                className="bg-white rounded-full border border-zinc-300   dark:border-zinc-300"
              />
            </a>
            <a
              className={`${
                isSocialIcon
                  ? "translate-0 opacity-100"
                  : "translate-y-[55px] opacity-0"
              } duration-300`}
              href="https://www.freelancer.com/u/mahmudhasan2002"
              target="blanket"
            >
              <Image
                src={"/freelancer.png"}
                height={60}
                width={60}
                alt="freelancer image"
                className="bg-white rounded-full border border-zinc-300   dark:border-zinc-300"
              />
            </a>
            <a
              className={`${
                isSocialIcon
                  ? "translate-0 opacity-100"
                  : "translate-y-[55px] -translate-x-[81px] opacity-0"
              } duration-300`}
              href="https://www.fiverr.com/s/kLVv33k"
              target="blanket"
            >
              <Image
                src={"/fiverr.png"}
                height={60}
                width={60}
                alt="fiverr image"
                className="bg-white rounded-full border border-zinc-300   dark:border-zinc-300"
              />
            </a>
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-5 "
          ref={socialIconsRef}
        >
          <a
            className={`${
              isSocialIcon
                ? "translate-0 opacity-100"
                : "-translate-y-10 translate-26 opacity-0"
            } duration-300`}
            href="https://www.linkedin.com/in/md-mahmud-hasan-0334a1353"
            target="blanket"
          >
            <Image
              src={"/linkedin.png"}
              height={50}
              width={50}
              alt="linkedin image"
              className="bg-white rounded-full border border-zinc-300   dark:border-zinc-300"
            />
          </a>
          <a
            className={`${
              isSocialIcon
                ? "translate-0 opacity-100"
                : "-translate-y-10 translate-[34px] opacity-0"
            } duration-300`}
            href="https://web.facebook.com/mhmd.mhmwd.hsn.460051"
            target="blanket"
          >
            <Image
              src={"/facebook-logo.png"}
              height={50}
              width={50}
              alt="facebook image"
              className="bg-white rounded-full border border-zinc-300   dark:border-zinc-300"
            />
          </a>
          <a
            className={`${
              isSocialIcon
                ? "translate-0 opacity-100"
                : "-translate-y-10 -translate-[35px] opacity-0"
            } duration-300`}
            href="https://www.instagram.com/musafir0131173"
            target="blanket"
          >
            <Image
              src={"/instagram.png"}
              height={50}
              width={50}
              alt="instagram image"
              className="bg-white rounded-full border border-zinc-300   dark:border-zinc-300"
            />
          </a>
          <a
            className={`${
              isSocialIcon
                ? "translate-0 opacity-100"
                : "-translate-y-10 -translate-[106px] opacity-0"
            } duration-300`}
            href="https://x.com/MahmudHasan2002"
            target="blanket"
          >
            <Image
              src={"/twitter.png"}
              height={50}
              width={50}
              alt="twitter image"
              className="bg-white rounded-full border border-zinc-300   dark:border-zinc-300"
            />
          </a>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Mahmud Hasan — Designed & Developed by Me
      </footer>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/50 rounded-full animate-ripple"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
          }}
        />
      ))}
    </div>
  );
};
export default Home;
