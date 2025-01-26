import React from 'react'
import {Label} from '../ui/label';

const CommForm = ({formControls}) => {
  return (
    <div>
        <form>
            <div className='flex flex-col gap-3'>
                {
                    formControls.map(controlItem => <div className='grid w-full gap-1.5' key={controlItem.name}>
                        <Label className='mb-1'>{controlItem.Label}</Label>
                        {
                            
                        }
                    </div>)
                }
            </div>
        </form>
    </div>
  )
}

export default CommForm