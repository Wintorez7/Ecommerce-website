import React from 'react'
import {Label} from '../ui/label';

const CommForm = ({formControls}) => {

    function renderInputByComponentType(getControlItem){
        let element = null;
        switch (getControlItem.componentType) {
            case 'input':
                element = <Input
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                id={getControlItem.name}
                type={getControlItem.type}
                />
                break;
        
            default:
                break;
        }
    }

  return (
    <div>
        <form>
            <div className='flex flex-col gap-3'>
                {
                    formControls.map(controlItem => <div className='grid w-full gap-1.5' key={controlItem.name}>
                        <Label className='mb-1'>{controlItem.Label}</Label>
                        {
                            renderInputByComponentType(controlItem) 
                        }
                    </div>)
                }
            </div>
        </form>
    </div>
  )
}

export default CommForm