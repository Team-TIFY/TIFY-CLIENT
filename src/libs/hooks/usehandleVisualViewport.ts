const usehandleVisualViewport = <T>({
  divRef,
  height,
}: {
  divRef: React.RefObject<T>
  height: number
}) => {
  const handleVisualViewPortResize = () => {
    const currentVisualViewport = Number(window.visualViewport?.height)
    if (divRef) {
      divRef.current!.style.height = `${currentVisualViewport - 30}px`
      window.scrollTo(0, height)
    }
  }
  if (window.visualViewport) {
    window.visualViewport.onresize = handleVisualViewPortResize
  }
}

export default usehandleVisualViewport
