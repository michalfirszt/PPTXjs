import { useEffect } from 'react'

declare global {
  interface JQuery {
    pptxToHtml(options?: unknown): void;
  }
}

type PresentationProps = {
  fileInputId: string
}

const Presentation = ({ fileInputId }: PresentationProps) => {
  useEffect(() => {
    $('#result').pptxToHtml({
      pptxFileUrl: '',
      fileInputId: fileInputId,
      slideMode: false,
      keyBoardShortCut: false,
      slideModeConfig: {  //on slide mode (slideMode: true)
          first: 1, 
          nav: false, /** true,false : show or not nav buttons*/
          navTxtColor: 'white', /** color */
          navNextTxt:'&#8250;', //">"
          navPrevTxt: '&#8249;', //"<"
          showPlayPauseBtn: false,/** true,false */
          keyBoardShortCut: false, /** true,false */
          showSlideNum: false, /** true,false */
          showTotalSlideNum: false, /** true,false */
          autoSlide: false, /** false or seconds (the pause time between slides) , F8 to active(keyBoardShortCut: true) */
          randomAutoSlide: false, /** true,false ,autoSlide:true */ 
          loop: false,  /** true,false */
          background: 'black', /** false or color*/
          transition: 'default', /** transition type: "slid","fade","default","random" , to show transition efects :transitionTime > 0.5 */
          transitionTime: 1 /** transition time in seconds */
      }
    });
  }, [fileInputId])

  return (
    <div id="wrapper">
      <input id={fileInputId} type="file" />
      <div id="container">
        <div id="result"></div>
      </div>
    </div>
  )
}

export default Presentation