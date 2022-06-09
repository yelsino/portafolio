export const particlesConfig = {
  background: {
    color: {
      value: "#0f05",
    },
  },
  fullScreen: {
    zIndex: 1,
    enabled: true,
    
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      repulse: {
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
    },
  },
  particles: {
    color: {
      value: "#ff0000",
      animation: {
        h: {
          enable: true,
          speed: 20,
        },
      },
    },
    links: {
      color: {
        value: "#ffffff",
      },
      enable: true,
      opacity: 0.4,
    },
    move: {
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 6,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: {
        min: 0.1,
        max: 3,
      },
    },
  },
};
