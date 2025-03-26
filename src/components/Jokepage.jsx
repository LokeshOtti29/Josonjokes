import React from 'react'
import Center from './Center'
import Type from './Type'
import Pagination from './Pagination'

const Jokepage = () => {
  return (
    <div>
        <div className='d-flex flex-row'>
            <div>
            <Center/>
            </div>
            <div>
             <Type/>
            </div>
        </div>
       
    </div>
  )
}

export default Jokepage
