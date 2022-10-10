export default defineNuxtPlugin(() => {
  type Rotate = {
    x: number
    y: number
    z: number
  }
  const rotate = reactive<Rotate>({
    x: 0,
    y: 0,
    z: 0,
  })

  return {
    provide: {
      rotate,
      guriguri: (newRotate: Rotate) => {
        rotate.x = newRotate.x
        rotate.y = newRotate.y
        rotate.z = newRotate.z
      },
    },
  }
})
