import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react'
import { addLista } from '../store/reducers';
import { useRouter } from 'next/navigation';

interface NovaListaProps {
    onCloseDrawer: Function;
}

const NovaListaForm: React.FC<NovaListaProps> = ({onCloseDrawer}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [titulo, setTitulo] = useState('')
    const [semTitulo, setSemTitulo] = useState(false)
    const inputRef = useRef(null);
    
    const error = 'Informe o título da nova lista!';

    const handleClearFocus = (e: any) => {
        if(titulo === error){
            setTitulo('')
        }
    }
    const handleChange = (e: any) => {
        setTitulo(e.target.value)
        console.log(e.key)
    }
    const handleAddLista = () => {
        if(titulo === '' || titulo === error){
            setTitulo('Informe o título da nova lista!')
            setSemTitulo(true)
            setTimeout(() => {
                setSemTitulo(false)
                setTitulo('')
            }, 800)
            return;
        }
        dispatch(addLista(titulo))
        const tituloLink = titulo.replaceAll(' ', '-')
        setTitulo('')
        onCloseDrawer()
        router.push(`/${tituloLink}`)
    }
    const handlePressEnter = (e: any) => {
        if(e.key === 'Enter'){
            if(titulo === '' || titulo === error){
                setTitulo('Informe o título da nova lista!')
                setSemTitulo(true)
                setTimeout(() => {
                    setSemTitulo(false)
                    setTitulo('')
                }, 800)
                return;
            }
            handleAddLista()
        }
    }
    useEffect(() => {
      if(!semTitulo){
        const element: any = document.querySelector('#inputLista')
        if(element){
            element.focus();
        }
      }
    }, [semTitulo])
    
    return (
        <FormControl>
            <FormLabel>Título</FormLabel>
            <Input onChange={handleChange} id='inputLista' onKeyDown={handlePressEnter} disabled={semTitulo} onFocus={handleClearFocus} value={titulo} />
            <Button className='mt-2' onClick={handleAddLista}>Adicionar</Button>
        </FormControl>
    )
}

export default NovaListaForm