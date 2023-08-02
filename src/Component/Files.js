import FilesComp from './FilesComp'
import pdf from './images/pdf.svg'
import dll from './images/dll.svg'
import avi from './images/avi.svg'
import eps from './images/eps.svg'
import png from './images/png.svg'
import txt from './images/txt.svg'
import zip from './images/zip.svg'
import { FiUpload} from "react-icons/fi";
import { VscFilePdf} from "react-icons/vsc";
import { FaImages,FaFileCsv} from "react-icons/fa";
import { BsFillFileEarmarkWordFill} from "react-icons/bs";


function Files (){
    return(
        <div className=" Files row overflow-auto">
            <div className='col-md-10 col-sm-12 row'>

                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="10 May 2022"  title="my-file.pdf" bg={pdf} description="developer" size="10.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="30 May 2022"  title="my-file.dll" bg={dll} description="cloud developer" size="10.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="21 May 2022"  title="my-file.avi" bg={avi} description="admin" size="10.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="16 May 2022"  title="my-file.eps" bg={eps} description="osama"  size="17.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="19 Mar 2022"  title="my-file.png" bg={png} description="uplader" size="165.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="1 Mar 2022"   title="my-file.txt" bg={txt} description="admin" size="78.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="5 May 2021"   title="my-file.zip" bg={zip}  description="mohammed" size="45.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="10 sep 2020"  title="my-file.png" bg={png}  description="designer"    size="16.3MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="10 sep 2020"  title="my-file.eps" bg={eps}  description="coder" size="17.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="10 sep 2020"  title="my-file.pdf" bg={pdf}  description="UI UX Designer" size="10.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="19 Mar 2022"  title="my-file.png" bg={png} description="uplader" size="165.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="1 Mar 2022"   title="my-file.txt" bg={txt} description="admin" size="78.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="5 May 2021"   title="my-file.zip" bg={zip}  description="mohammed" size="45.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="10 sep 2020"  title="my-file.png" bg={png}  description="designer"    size="16.3MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="10 sep 2020"  title="my-file.eps" bg={eps}  description="coder" size="17.5MB" />
                    </div>
                    <div className='box col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 border-whight'>
                        <FilesComp date="5 May 2021"   title="my-file.zip" bg={zip}  description="mohammed" size="45.5MB" />
                    </div>
            </div>
            <div className='col-md-2 col-sm-6 col-sm-12 rounded container p-2 bg-white h-25 pb-3'>
                <h5 className='p-2'>Files Statistics</h5>
                <div className='sub_box border rounded container p-2 d-flex justify-content-between mb-3'>
                    <div className='d-flex justify-content-between'>
                    <div className='px-2 py-1 me-2 pdf'>
                        <VscFilePdf color='#0d6efd'/>
                    </div>
                        <div>
                            <h6>PDF Files</h6>
                            <span className='text-black-50'>130</span>
                        </div>
                    </div>
                    <span className='text-black-50'>6.5GB</span>
                </div>
                <div className='sub_box border rounded container p-2 d-flex justify-content-between mb-3'>
                    <div className='d-flex justify-content-between'>
                    <div className='px-2 py-1 me-2 images'>
                        <FaImages color='#20c997'/>
                    </div>
                    <div>
                        <h6>Images</h6>
                        <span className='text-black-50'>130</span>
                    </div>
                    </div>
                    <span className='text-black-50'>6.5GB</span>
                </div>
                <div className='sub_box border rounded container p-2 d-flex justify-content-between mb-3'>
                    <div className='d-flex justify-content-between'>
                    <div className='px-2 py-1 me-2 word'>
                        <BsFillFileEarmarkWordFill color='#dc3545'/>
                    </div>
                    <div>
                        <h6>Word Files</h6>
                        <span className='text-black-50'>130</span>
                    </div>
                    </div>
                    <span className='text-black-50'>6.5GB</span>
                </div>
                <div className='sub_box border rounded container p-2 d-flex justify-content-between mb-3'>
                    <div className='d-flex justify-content-between'>
                    <div className='px-2 py-1 me-2 csv'>
                        <FaFileCsv color='#fd7e14'/>
                    </div>
                    <div>
                        <h6>Csv Files</h6>
                        <span className='text-black-50'>130</span>
                    </div>
                    </div>
                    <span className='text-black-50'>6.5GB</span>
                </div>
                <button className='btn btn-primary px-2 py-1 rounded text-center w-100'><span className='me-3'><FiUpload color='#fff'/></span>Upload</button>
            </div>            
        </div>
    )
}

export default Files ;

