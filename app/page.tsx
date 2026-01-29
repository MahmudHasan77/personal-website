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
import { MdDarkMode } from "react-icons/md";
const neue = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

const applications: {
  id: number;
  img: string;
  link: string;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    img: "/coffee-image-home-page.jpg",
    link: "",
    title: "Coffee Shop application design",
    description:
      "A fully functional e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes product management, shopping cart, user authentication, order tracking, and secure payment integration. Designed with a modern UI and responsive layout for seamless user experience across all devices.",
  },
];
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
  const engineeringText = " Web Engineer";
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
  const service9Ref = useRef<HTMLDivElement>(null);
  const service10Ref = useRef<HTMLDivElement>(null);
  const service11Ref = useRef<HTMLDivElement>(null);
  const [isService9, setService9] = useState(false);
  const [isService10, setService10] = useState(false);
  const [isService11, setService11] = useState(false);
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
    const currentDiv = service10Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService10(true);
        } else {
          setService10(false);
        }
      },
      { rootMargin: "-10% -10%" },
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
    const currentDiv = service11Ref.current;
    if (!currentDiv) return;
    const handleObserve = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setService11(true);
        } else {
          setService11(false);
        }
      },
      { rootMargin: "-10% -10%" },
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
      { rootMargin: "-10% -10%" },
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
  const Fs = 20;
  if (themMode === "") return;
  // skill card templates
  const SkillCard = ({
    name,
    fontSize,
    src,
    alt,
    style,
  }: {
    name: string;
    fontSize: number;
    src: string;
    alt: string;
    style: string;
  }) => {
    return (
      <div
        className={`h-10 w-25 bg-white rounded-full cursor-context-menu
      ${style}`}
      >
        <div
          className={`h-full w-full flex justify-around items-center border border-zinc-200 dark:border-zinc-600 p-2 rounded-full skillCard 
           
           `}
        >
          <Image
            src={src}
            width={25}
            height={25}
            alt={alt}
            priority
            className="rounded-full skillImage"
          />
          <p
            className={`text-zinc-900 font-semibold`}
            style={{ fontSize: fontSize }}
          >
            {name}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      onClick={handleClick}
      className={`relative overflow-x-hidden  ${
        themMode && themMode === "dark"
          ? "dark dark:bg-gradient-to-l from-gray-800 via-[#000922] to-gray-800 text-white "
          : "bg-[#f8feff] text-[#094100] "
      }
       transition-all duration-500`}
    >
      <header className="flex justify-between  backdrop-blur-lg items-center py-3 px-10 md:px-20 fixed top-0 z-50 bg-blue-50/70 text-black duration-500 dark:bg-gray-800/70 shadow w-full dark:border-b border-yellow-300/20">
        <div className="flex">
          <button onClick={() => setShowNav(!showNav)}>
            <CgMenuHotdog className="cursor-pointer text-2xl md:hidden text-yellow-300 hover:scale-110 hover:text-yellow-400 duration-300" />
          </button>
        </div>
        <div className="flex items-center gap-2 relative h-7 w-7">
          <a href="#home">
            <Image
              src="/author-google.png"
              alt="mahmud hasan web and mobile app developer"
              // width={40}
              // height={40}
              // priority
              // style={{ width: "auto", height: "auto", padding: 3 }}
              fill
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
          className={`md:hidden h-65 ${
            showNav ? "translate-y-0" : "-translate-y-75"
          } flex flex-col gap-3 px-10 fixed top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 duration-500 transition-all w-full border-b border-zinc-300 z-40 dark:text-[#ffd900] text-green-600 pt-9 ${
            neue.className
          }`}
        >
          {navigation.map((nav, i) => {
            return (
              <a
                onClick={() => setShowNav(false)}
                href={nav.link}
                key={i}
                className={`border-b border-green-100 hover:border-green-300 hover:dark:border-yellow-50 dark:border-yellow-50/20 flex items-center group  transform transition-all duration-500 ${
                  showNav
                    ? "translate-x-0 opacity-100 "
                    : "translate-x-50 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
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
        className="scroll-mt-28   my-5 pt-20 relative"
      >
        {/* stars */}
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-35 md:top-40 lg:top-35 right-40 md:right-10 lg:right-20 starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-35 md:top-40 lg:top-35 left-40 md:left-10 lg:left-20 starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-65 sm:top-50 right-35 md:right-40 lg:right-80 starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-65 sm:top-50 left-35 md:left-40 lg:left-80 starAnimation"
        />

        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-60 md:top-70 left-15 starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-60 md:top-70 right-15 starAnimation"
        />

        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-77 left-20 sm:left-40 sm:top-70 md:top-77 md:left-50 lg:left-99 lg:top-99 starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-77 right-20 sm:right-40 sm:top-70 md:top-77 md:right-50 lg:right-99 lg:top-99 starAnimation"
        />

        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-155 right-15 md:right-55 lg:right-70 md:top-150 starAnimation"
        />

        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-155 left-15 md:left-55 lg:left-70 md:top-150 starAnimation"
        />

        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-127 sm:top-120 lg:top-145 left-1/2 md:left-4/7 lg:left-1/2 starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-185 md:top-150 lg:hidden left-1/2 starAnimation"
        />

        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-130 left-25 sm:hidden starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-130 right-25 sm:hidden starAnimation"
        />

        {/* lg screen */}
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-25 left-100 hidden lg:inline starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-25 right-100 hidden lg:inline starAnimation"
        />
        <Image
          src={"/christmas-star.png"}
          width={5}
          height={5}
          alt="star image"
          className="absolute top-73 right-1/2 hidden lg:inline starAnimation"
        />

        {/* logo small screen */}

        <div className="flex justify-center md:justify-around gap-10">
          <div
            className={` ${
              isStart
                ? "translate-x-0 opacity-100"
                : "opacity-0 translate-x-[250%] md:translate-x-[1000%]"
            } duration-3000 h-10 w-10 md:h-15 md:w-15 relative topLogoLeft`}
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
            className={` h-10 w-10 md:h-15 md:w-15 relative duration-3000 topLogoMiddle ${
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
            className={`h-10 w-10 md:h-15 md:w-15 relative duration-3000 topLogoRight ${
              isStart
                ? "translate-x-0 opacity-100"
                : "-translate-x-[250%] md:-translate-x-[1000%] opacity-0"
            }`}
          >
            <Image
              src={"/next-js-logo.png"}
              fill
              alt="next js logo"
              priority
              className="rounded-full bg-green100 logoShadow dark:shadow-none!"
            />
          </div>
        </div>

        {/* name */}
        <div className="flex justify-around  items-center ">
          <div
            className={`hidden md:inline duration-3000 ${
              isStart
                ? "translate-x-0 opacity-100"
                : "translate-x-[1000%] opacity-0"
            }`}
          >
            <Image
              src={"/node-js-logo.png"}
              width={60}
              height={60}
              alt="node js"
              className="rounded-full nodeLogo logoShadow dark:shadow-none!"
            />
          </div>
          <div className="text-center px-4 my-10 overflow-hidden  flex justify-center items-center gap-5">
            <Image
              src={"/sparkling.png"}
              height={20}
              width={20}
              alt="sparkling"
              className={` ${
                isStart
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              } duration-3000 object-contain rotate-45 sparklingLeft`}
            />
            <div>
              <h1
                className={`${neue.className} text-2xl md:text-3xl lg:text-4xl font-bold z-40 opacity-100`}
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

              <div className="flex gap-2 justify-center">
                <Image
                  src={"/coding.png"}
                  width={15}
                  height={11}
                  alt="web development"
                />
                <div className="webEngineer text-xs w-20  relative overflow-hidden font-semibold text-[#021ab6] dark:text-[#faf]">
                  Web Engineer
                  <div className="w-20 h-4.5 webDevTranslation   border-l  dark:bg-[#000922] absolute top-0"></div>
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <Image
                  src={"/mobile-coding.png"}
                  width={15}
                  height={11}
                  alt="web development"
                />
                <div className="text-xs w-32 relative overflow-hidden font-semibold text-[#021ab6] dark:text-[#faf]">
                  Mobile App Developer
                  <div className="w-32 h-4.5 appDevTranslation border-l  dark:bg-[#000922] opacity-100 absolute top-0"></div>
                </div>
              </div>
            </div>
            <Image
              src={"/sparkling.png"}
              height={20}
              width={20}
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
              width={60}
              height={60}
              alt="mongodb logo"
              className="rounded-full mongoLogo logoShadow  dark:shadow-none!"
            />
          </div>
        </div>

        {/* small screen icons */}
        <div className="flex justify-center md:hidden gap-10">
          <Image
            src={"/node-js-logo.png"}
            width={40}
            height={40}
            alt="node js"
            className={`rounded-full nodeLogoSmall logoShadow dark:shadow-none! duration-3000 ${
              isStart
                ? "translate-x-0 opacity-100"
                : "-translate-x-[500%] opacity-0"
            }`}
          />
          <Image
            src={"/mongodb-logo.png"}
            width={40}
            height={40}
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
            className={` text-center text-lg md:text-xl  text-[#8a6300] dark:text-yellow-400 px-7 mb-5 md:flex lg:inline duration-3000 items-center 
               ${neue.className} ${
                 isStart
                   ? "translate-y-0 opacity-100"
                   : "translate-y-[100%] opacity-0"
               }`}
          >
            I&apos;m a Full Stack Web &amp; Mobile App Developer passionate
            about creating clean, responsive, and modern applications. I
            specialize in building user-friendly web platforms and
            cross-platform mobile apps, delivering seamless experiences for both
            web and mobile users.
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
        className={` scroll-mt-20  my-15 border border-zinc-300/50   dark:border-white/10 rounded-xl text-center flex flex-col items-center gap-3 w-[90%] mx-auto px-3 md:px-10 lg:px-30  py-5 pb-10 lg:pb-15 whiteShadow duration-1000 bg-blue-50 dark:bg-[#d5dafd31] `}
      >
        <div className="font-bold text-2xl text-center flex justify-center items-center gap-2">
          <h1
            className={`${
              startAbout
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            } animateText duration-500`}
          >
            About
          </h1>

          <h1
            className={`${
              startAbout
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            } animateText duration-500`}
          >
            me
          </h1>
        </div>

        <div className="w-full  relative h-40 md:h-70 lg:h-70 mb-30 md:mb-30 ">
          <div className="flex flex-col justify-center items-center z-0">
            <div
              className={`${
                startAbout ? "scale-100 duration-500" : "scale-0"
              } w-50 h-50  md:w-70 md:h-70  rounded-full overflow-hidden rotate-5 m-auto z-40`}
            >
              <Image
                src={"/author.png"}
                height={0}
                width={200}
                style={{ height: "auto", width: "100%" }}
                priority
                alt="mahmud hasan web developer"
                className="object-cover z-40"
              />
            </div>
            <div className="slider -mt-12 sm:-mt-22">
              <span
                style={{ "--i": 1 } as React.CSSProperties}
                className="relative h-10 w-10"
              >
                <Image
                  src={"/author-google.png"}
                  fill
                  alt=""
                  className="rounded"
                />
              </span>
              <span
                style={{ "--i": 2 } as React.CSSProperties}
                className="relative h-10 w-10"
              >
                <Image
                  src={"/author-google.png"}
                  fill
                  alt=""
                  className="rounded"
                />
              </span>
              <span
                style={{ "--i": 3 } as React.CSSProperties}
                className="relative h-10 w-10"
              >
                <Image
                  src={"/author-google.png"}
                  fill
                  alt=""
                  className="rounded"
                />
              </span>
              <span
                style={{ "--i": 4 } as React.CSSProperties}
                className="relative h-10 w-10"
              >
                <Image
                  src={"/author-google.png"}
                  fill
                  alt=""
                  className="rounded"
                />
              </span>
              <span
                style={{ "--i": 5 } as React.CSSProperties}
                className="relative h-10 w-10"
              >
                <Image
                  src={"/author-google.png"}
                  fill
                  alt=""
                  className="rounded"
                />
              </span>
              <span
                style={{ "--i": 6 } as React.CSSProperties}
                className="relative h-10 w-10"
              >
                <Image
                  src={"/author-google.png"}
                  fill
                  alt=""
                  className="rounded"
                />
              </span>
              <span
                style={{ "--i": 7 } as React.CSSProperties}
                className="relative h-10 w-10"
              >
                <Image
                  src={"/author-google.png"}
                  fill
                  alt=""
                  className="rounded"
                />
              </span>
              <span
                style={{ "--i": 8 } as React.CSSProperties}
                className="relative h-10 w-10"
              >
                <Image
                  src={"/author-google.png"}
                  fill
                  alt=""
                  className="rounded"
                />
              </span>
            </div>
          </div>
        </div>

        <div ref={aboutPara1Ref} className="overflow-hidden">
          <p
            className={`${
              aboutPara1
                ? "aboutPara1 opacity-100"
                : "translate-x-[100%] opacity-0"
            } duration-500 `}
          >
            Hi, I’m <strong>Muhammad Hasan,</strong> a passionate Full Stack Web
            & Mobile App Developer who loves turning ideas into interactive,
            modern, and responsive experiences. I specialize in building clean,
            efficient, and user-focused web applications using the MERN Stack
            and Next.js, as well as cross-platform mobile apps with React Native
            and Expo.
          </p>
        </div>
        <div ref={aboutPara2Ref} className="overflow-hidden">
          <p
            className={`${
              aboutPara2
                ? "aboutPara2 opacity-100"
                : "-translate-x-[100%] opacity-0"
            } duration-500 `}
          >
            With every project, my goal is simple — to write clean code, design
            intuitive interfaces, and deliver smooth, high-performance solutions
            that make a real impact across both web and mobile platforms.
          </p>
        </div>
        <div ref={aboutPara3Ref} className="overflow-hidden">
          <p
            className={`${
              aboutPara3
                ? "aboutPara3 opacity-100"
                : "translate-x-[100%] opacity-0"
            } duration-500 `}
          >
            I enjoy learning new technologies, improving my skills every day,
            and collaborating with others to bring creative visions to life.
          </p>
        </div>
        <div ref={aboutPara4Ref} className="overflow-hidden">
          <p
            className={`${
              aboutPara4
                ? "aboutPara4 opacity-100"
                : "-translate-x-[100%] opacity-0"
            } duration-500 `}
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
        className="scroll-mt-20 overflow-hidden my-15 border border-zinc-300/50 dark:border-white/10 rounded-xl w-[100%] md:w-[90%]  mx-auto whiteShadow duration-500 skillBg text-sm pb-7 pt-5 px-1 md:px-5"
      >
        <h1 className="font-bold text-2xl text-center pb-5 animateText">
          Skills
        </h1>
        <p
          className={`${
            startSkill
              ? " translate-y-0"
              : "-translate-y-[100%] opacity-0  -translate-x-52"
          } max-w-80 duration-500 sm:max-w-100 px-5 text-center mx-auto text-black/70 dark:text-white/70`}
        >
          Here are the technologies and tools I work with to build efficient,
          scalable web and mobile applications, turning ideas into seamless,
          high-performance experiences.
        </p>
        <div className="flex my-5 gap-x-2 gap-y-5 md:gap-5 flex-wrap justify-around dark:text-white">
          {/* html  */}
          {SkillCard({
            name: "HTML",
            fontSize: 12,
            src: "/html-logo.webp",
            alt: "HTML",
            style: "skillScale1",
          })}
          {/* css  */}
          {SkillCard({
            name: "CSS",
            fontSize: 12,
            src: "/css-logo.webp",
            alt: "CSS",
            style: "skillScale2",
          })}

          {/* tailwind css  */}
          {SkillCard({
            name: "Tailwind CSS",
            fontSize: 10,
            src: "/tailwindCSS.png",
            alt: "Tailwind CSS",
            style: "skillScale1",
          })}

          {/* Bootstrap */}
          {SkillCard({
            name: "Bootstrap",
            fontSize: 12,
            src: "/bootstrap.png",
            alt: "Bootstrap",
            style: "skillScale2",
          })}

          {/* javaScript */}
          {SkillCard({
            name: "JavaScript",
            fontSize: 12,
            src: "/javaScript.png",
            alt: "JavaScript",
            style: "skillScale1",
          })}
          {/* python */}
          {SkillCard({
            name: "Python",
            fontSize: 12,
            src: "/python-logo.jpg",
            alt: "Python",
            style: "skillScale2",
          })}
          {/* TypeScript */}
          {SkillCard({
            name: "TypeScript",
            fontSize: 12,
            src: "/ts.png",
            alt: "TypeScript",
            style: "skillScale1",
          })}

          {/* React js */}
          {SkillCard({
            name: "React js",
            fontSize: 12,
            src: "/react-logo.png",
            alt: "React js",
            style: "skillScale2",
          })}

          {/* jquery */}
          {SkillCard({
            name: "JQuery",
            fontSize: 12,
            src: "/Jquery.png",
            alt: "JQuery",
            style: "skillScale1",
          })}

          {/* next js  */}
          {SkillCard({
            name: "Next js",
            fontSize: 12,
            src: "/next-js.webp",
            alt: "Next js",
            style: "skillScale2",
          })}

          {/* redux  */}
          {SkillCard({
            name: "Redux",
            fontSize: 12,
            src: "/redux-logo.png",
            alt: "Redux",
            style: "skillScale1",
          })}

          {/* React native  */}
          {SkillCard({
            name: "React Naive",
            fontSize: 10,
            src: "/react-native.png",
            alt: "React Naive",
            style: "skillScale2",
          })}

          {/* Expo  */}
          {SkillCard({
            name: "Expo",
            fontSize: 12,
            src: "/expo-logo.png",
            alt: "Expo",
            style: "skillScale1",
          })}

          {/* node js  */}
          {SkillCard({
            name: "Node js",
            fontSize: 12,
            src: "/node-js-logo.png",
            alt: "Node js",
            style: "skillScale2",
          })}

          {/* Express js  */}
          {SkillCard({
            name: "Express js",
            fontSize: 12,
            src: "/express_js.jpeg",
            alt: "Express js",
            style: "skillScale1",
          })}

          {/* mongo DB */}
          {SkillCard({
            name: "Mongo DB",
            fontSize: 12,
            src: "/mongo-DB.png",
            alt: "Mongo DB",
            style: "skillScale2",
          })}

          {/* mongoose */}
          {SkillCard({
            name: "Mongoose",
            fontSize: 12,
            src: "/mongoose.png",
            alt: "Mongoose",
            style: "skillScale1",
          })}

          {/* my sql */}
          {SkillCard({
            name: "MySQL",
            fontSize: 12,
            src: "/my-sql.png",
            alt: "MySQL",
            style: "skillScale2",
          })}

          {/* git  */}
          {SkillCard({
            name: "Git",
            fontSize: 12,
            src: "/git.png",
            alt: "Git",
            style: "skillScale1",
          })}

          {/* Git Hub  */}
          {SkillCard({
            name: "Git Hub",
            fontSize: 12,
            src: "/github.png",
            alt: "Git Hub",
            style: "skillScale2",
          })}

          {/* firebase  */}
          {SkillCard({
            name: "Firebase",
            fontSize: 12,
            src: "/firebase.png",
            alt: "Firebase",
            style: "skillScale1",
          })}
        </div>
      </section>

      {/* services */}
      <section
        id="service"
        className="scroll-mt-20 my-15 border border-zinc-300/50 dark:border-white/10 rounded-xl w-[100%] md:w-[90%] mx-auto  bg-blue-50 dark:bg-[#d5dafd31] whiteShadow pb-5"
      >
        <h1 className="text-center flex justify-center items-center gap-4 py-5">
          <span className="text-xl">
            <MdOutlineSettingsSuggest className="serviceIcon" />
          </span>
          <span className="font-bold text-2xl text-center  animateText">
            Services
          </span>
        </h1>
        <div className="flex p-2 flex-wrap gap-3 lg:gap-7 justify-center">
          <div ref={service1Ref}>
            <div
              className={`${
                isService1
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }  w-[100%] mx-auto md:w-90 text-center rounded p-5 bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40`}
            >
              <h1 className="font-semibold pb-3">
                🟢 Full Stack Web Development
              </h1>
              <p className="text-sm text-gray-900 dark:text-white">
                I develop complete, dynamic, and responsive web applications
                using MERN Stack and Next.js — from concept to deployment. Every
                project is structured, fast, and scalable for seamless web
                experiences.
              </p>
            </div>
          </div>
          <div ref={service2Ref}>
            <div
              className={`${
                isService2
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟢 Full Stack Mobile App Development
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I build cross-platform mobile applications using React Native
                and Expo, delivering smooth, responsive, and user-friendly apps
                for both Android and iOS devices.
              </p>
            </div>
          </div>
          <div ref={service3Ref}>
            <div
              className={`${
                isService3
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }   w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🔵 Frontend Development (Web & Mobile)
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I create modern and interactive interfaces using React.js,
                Tailwind CSS, and Material UI for web, and React Native
                components for mobile, ensuring intuitive and consistent user
                experiences across all platforms.
              </p>
            </div>
          </div>
          <div ref={service4Ref}>
            <div
              className={`${
                isService4
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟣 Backend Development (Web & Mobile)
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I design secure and efficient server-side systems using Node.js
                and Express.js, supporting APIs and data handling for both web
                and mobile applications.
              </p>
            </div>
          </div>
          <div ref={service5Ref}>
            <div
              className={`${
                isService5
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟠 Authentication & Authorization
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I implement secure authentication systems using JWT, bcrypt,
                NextAuth, and Firebase, ensuring user data privacy and reliable
                access control for web and mobile apps.
              </p>
            </div>
          </div>
          <div ref={service6Ref}>
            <div
              className={`${
                isService6
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟡 Database Design & Management
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I design, optimize, and manage databases using MongoDB, MySQL,
                PostgreSQL, and Firebase, ensuring speed, scalability, and
                security for both web and mobile projects.
              </p>
            </div>
          </div>
          <div ref={service7Ref}>
            <div
              className={`${
                isService7
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">🔵 API Integration </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I integrate third-party APIs (Payment, Email, Authentication,
                etc.) to enhance functionality and efficiency for web and mobile
                applications.
              </p>
            </div>
          </div>
          <div ref={service8Ref}>
            <div
              className={`${
                isService8
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }    w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">🟣 Hosting & Deployment</h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I manage hosting, domain setup, and deployment on platforms like
                Vercel, Render, and Netlify for web apps, and handle app store
                deployment for mobile applications.
              </p>
            </div>
          </div>
          <div ref={service9Ref}>
            <div
              className={`${
                isService9
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }   w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟤 Maintenance & Optimization
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I provide updates, bug fixes, and performance improvements to
                keep web and mobile projects secure, fast, and reliable over
                time.
              </p>
            </div>
          </div>
          <div ref={service10Ref}>
            <div
              className={`${
                isService10
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }   w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟣 Maintenance & Optimization
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I provide updates, bug fixes, and performance improvements to
                keep web and mobile projects secure, fast, and reliable over
                time.
              </p>
            </div>
          </div>
          <div ref={service11Ref}>
            <div
              className={`${
                isService11
                  ? "translate-y-0 duration-1000 scale-100 ease-out"
                  : "translate-y-[50%] opacity-0 scale-90"
              }   w-[100%] mx-auto md:w-90  text-center rounded p-5    bg-[#d5dafd31] border border-zinc-300/50   dark:border-white/10 h-40 `}
            >
              <h1 className="font-semibold pb-3">
                🟢 Search Engine Optimization (SEO)
              </h1>
              <p className="text-sm text-gray-700 dark:text-white">
                I optimize web applications for better visibility and search
                engine ranking, including clean code structure, fast
                performance, meta tags, and on-page SEO techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*app list*/}
      <section
        id="portfolio"
        className="scroll-mt-20 my-15 md:p-5  border border-zinc-300/50   dark:border-white/10 rounded-md bg-blue-50 dark:bg-[#d5dafd31] whiteShadow py-10"
      >
        <h1 className="font-bold text-2xl text-center pb-5 animateText">
          Application List
        </h1>
        <div className="flex justify-center">
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-50 h-105  rounded-2xl appCardBorder duration-300 relative appCardShadow bg-white">
                <span className="absolute top-1 left-[50%] -translate-x-[50%] bg-black rounded-full w-2 h-2" />
                <span className="absolute top-20 -right-[8px] bg-[#101010]   w-1 h-13 rounded-xs" />
                <span className="absolute top-40 -right-[8px] bg-[#101010] w-1 h-7 rounded-xs" />
                <div className="relative h-full w-full">
                  <Image
                    src={"/coffee-image-home-page.jpg"}
                    fill
                    alt="coffee shop mobile"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="py-5">
                <h1 className="text-sm text-center">
                  {"Coffee shop application"}
                </h1>
                <div
                  className="border border-zinc-300  dark:border-white/30 text-xs py-2 bg-blue-100/50 text-green-100 w-full text-center rounded-full cursor-pointer duration-300 whiteShadow my-3 hover:bg-blue-100/80 hover:text-black"
                  // onClick={() => {
                  //   setShowDetails(port);
                  //   setDetailsOpen(true);
                  // }}
                >
                  View Application
                </div>
                <div
                  className="border border-zinc-300  dark:border-white/30 text-xs py-2 bg-blue-100/50 text-green-100 w-full text-center rounded-full cursor-pointer duration-300 whiteShadow mb-3 hover:bg-blue-100/80 hover:text-black"
                  // onClick={() => {
                  //   setShowDetails(port);
                  //   setDetailsOpen(true);
                  // }}
                >
                  Download Application
                </div>
              </div>
            </div>
          </div>
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

      {/* website list */}
      <section className="scroll-mt-20 my-15 md:p-5  border border-zinc-300/50   dark:border-white/10 rounded-md bg-blue-50 dark:bg-[#d5dafd31] whiteShadow py-10">
        <h1 className="font-bold text-2xl text-center pb-5 animateText">
          Website List
        </h1>
        <div className="sm:flex flex-wrap gap-5 lg:gap-8 justify-center">
          {portfolios.map((port, index) => {
            return (
              <div
                key={index}
                className="border border-zinc-300  appCardShadow dark:border-white/30 whiteShadow w-[80%] md:w-70 mx-auto rounded-md my-5 bg-blue-200/50"
              >
                <div className="relative w-full h-70 portfolioBox rounded-t-md overflow-y-auto">
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
                    className="border border-zinc-300   dark:border-white/30 hover:bg-yellow-300 hover:text-white text-sm py-1.5 w-30 text-center rounded-full cursor-pointer dark:bg-white bg-gray-500 duration-300 text-white dark:text-black whiteShadow"
                    onClick={() => {
                      setShowDetails(port);
                      setDetailsOpen(true);
                    }}
                  >
                    View Details
                  </div>
                  <div className="border border-zinc-300   dark:border-white/30 hover:bg-yellow-300 hover:text-white text-sm py-1.5 w-30 text-center rounded-full cursor-pointer dark:bg-white bg-gray-500 duration-300 text-white dark:text-black whiteShadow">
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
        className="scroll-mt-20 border border-zinc-300/50   dark:border-white/10 bg-[#d5dafd31] whiteShadow w-[95%] md:w-md lg:w-lg mx-auto rounded-md my-5 py-10 px-2 flex flex-col gap-y-10 duration-500 "
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
              messageBtn ? "messageBtn " : "-translate-x-[250%] opacity-0 "
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
