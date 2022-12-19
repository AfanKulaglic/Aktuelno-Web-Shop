import React, { useState } from 'react'
import { db } from '../../firebase'
import { uid } from 'uid'
import  { set, ref, onValue,remove } from 'firebase/database'

export const UpdateCart = ({item}) => {
    const [isEdit,setIsEdit] = useState(false)
    const [tempUuid,setTempUuid] = useState('')

    setIsEdit(true)
	setTempUuid(item.uuid)

    remove(ref(db,`$/{tempUuid}`), {
		item
	})

    alert(item)
}
