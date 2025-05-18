import { gsap } from 'gsap'

export default {
  mounted(el, binding) {
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: binding.value?.duration || 0.8,
        delay: binding.value?.delay || 0.1,
        ease: 'power2.out'
      }
    )
  }
}
