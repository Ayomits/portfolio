import { createAnimationLibrary } from "./__create-animations";

export const fadeAnimations = createAnimationLibrary({
  variants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1
    }
  },
  animations: {}
})({
  fade: {},
  fadeScalable: {
    hidden: {
      scale: 0.9
    },
    visible: {
      scale: 1
    },
  },
  fadeYDownDefault: {
    hidden: {
      y: -100
    },
    visible: {
      y: 0
    },
  },
  fadeYDown: {
    visible: {
      y: 0
    },
    hidden: {
      y: -20
    }
  },
  fadeYUp: {
    visible: {
      y: 0
    },
    hidden: {
      y: 20
    }
  },
  fadeYUpDefault: {
    visible: {
      y: 0
    },
    hidden: {
      y: 100
    }
  },
  fadeXLeft: {
    visible: {
      x: 0
    },
    hidden: {
      x: -100
    }
  },
  fadeXRightDefault: {
    visible: {
      x: 100
    },
    hidden: {
      x: 0
    }
  },
})
