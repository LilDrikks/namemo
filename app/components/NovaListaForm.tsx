import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import { addLista } from '../store/reducers';
import { useRouter } from 'next/navigation';

function NovaListaForm() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [titulo, setTitulo] = useState('')

    const handleChange = (e: any) => {
        setTitulo(e.target.value)
        console.log(titulo)
    }
    const handleAddLista = () => {
        dispatch(addLista(titulo))
        const tituloLink = titulo.replaceAll(' ', '-')
        setTitulo('')
        router.push(`/${tituloLink}`)
    }
    return (
        <FormControl>
            <FormLabel>Título</FormLabel>
            <Input onChange={handleChange} value={titulo} />
            <Button className='mt-2' onClick={handleAddLista}>Adicionar</Button>
        </FormControl>
    )
}

export default NovaListaForm