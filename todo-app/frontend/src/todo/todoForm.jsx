import React from 'react'
import Grid from '../template/grid'
import IcontButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
            <div role='form' className='todoForm'>        
                <Grid cols='12 9 10'>        
                    <input id='description' className='form-control'
                        placeholder='Adicone uma tarefa'
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        value={props.description}/>
                </Grid>
        
                <Grid cols='12 3 2'>
                    <IcontButton style='primary' icon='plus'
                        onClick={props.handleAdd} />
                    <IcontButton style='info' icon='search'
                        onClick={props.handleSearch} />
                    <IcontButton style='default' icon='close'
                        onClick={props.handleClear} />
                </Grid>
            </div>
        )
}