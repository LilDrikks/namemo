import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import { addLista } from '../store/reducers';
import { useRouter } from 'next/navigation';

interface NovaListaProps {
    onCloseDrawer: Function;
}

const NovaListaForm: React.FC<NovaListaProps> = ({onCloseDrawer}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [titulo, setTitulo] = useState('')
    
    const error = 'Informe o título da nova lista!';

    const handleClearFocus = (e: any) => {
        if(titulo === error){
            setTitulo('')
        }
    }
    const handleChange = (e: any) => {
        setTitulo(e.target.value)
    }
    const handleAddLista = () => {
        if(titulo === '' || titulo === error){
            setTitulo('Informe o título da nova lista!')
            return;
        }
        dispatch(addLista(titulo))
        const tituloLink = titulo.replaceAll(' ', '-')
        setTitulo('')
        onCloseDrawer()
        router.push(`/${tituloLink}`)
    }
    return (
        <FormControl>
            <FormLabel>Título</FormLabel>
            <Input onChange={handleChange} onFocus={handleClearFocus} value={titulo} />
            <Button className='mt-2' onClick={handleAddLista}>Adicionar</Button>
        </FormControl>
    )
}

export default NovaListaForm