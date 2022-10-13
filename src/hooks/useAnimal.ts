type Rotate = {
  x: number
  y: number
  z: number
}

type Animal = {
  rotate: Rotate & {
    set: (r: Rotate) => void
  }
  updateRenderGraph: () => void
}

export const useAnimal = (
  maker: () => Animal,
  onUpdate?: (rotate: Rotate) => void
) => {
  let animal: Animal
  let req: number

  onMounted(() => {
    animal = maker()
  })

  const animate = () => {
    animal.updateRenderGraph()
    onUpdate?.(animal.rotate)
    req = requestAnimationFrame(animate)
  }

  onMounted(() => {
    animate()
  })

  onUnmounted(() => {
    cancelAnimationFrame(req)
  })
}

export const useAnimalSync = (maker: () => Animal, getRotate: () => Rotate) => {
  let animal: Animal
  let req: number

  // render
  onMounted(() => {
    animal = maker()
  })

  const animate = () => {
    // sync
    animal.rotate.set(getRotate())
    animal.updateRenderGraph()
    req = requestAnimationFrame(animate)
  }

  onMounted(() => {
    animate()
  })

  onUnmounted(() => {
    cancelAnimationFrame(req)
  })
}

export const useAnimalSyncOnce = (
  maker: () => Animal,
  getRotate: () => Rotate
) => {
  // render
  onMounted(() => {
    const animal = maker()
    animal.rotate.set(getRotate())
    animal.updateRenderGraph()
  })
}
