export const textContainer = {
    hidden:{
        opacity: 0,
    },
    show:{
        opacity: 1,
        transition: { staggerChildren: .05},
      },

    hover:{
        opacity: 1,
        transition: { staggerChildren: .05},
      },
}
// what should be the default value of staggerChildren and delayChildren?


export const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
    hidden: {},
    show: {
      transition: {

        staggerChildren,
        delayChildren,
      },
    },
    hover: {}
  });


export const fadeIn = {
    hidden: {
        opacity: 0,
        y:100,

    },
    show: {
        opacity: 1,
        y: 0
    },
    hover: {
        opacity: 0,
        y: 100
    }
}
export const fadeOut = {
    hidden: {
        opacity: 1,
        y:'-50%',
        x: '-50%'
    },
    show: {
        opacity: 0,
        y:'-100%',
        x: '-50%'
    },
    hover: {
        opacity: 1,
        y:'-50%',
        x: '-50%'
    }
}