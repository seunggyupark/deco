import React, { useState, useEffect } from 'react';
import './Loading.scss';
import * as THREE from 'three';
import { useTransition, a } from '@react-spring/three'


export default function Loading(props) {
    const { url } = props;
    const [finished, setFinished] = useState(false)
    const [width, setWidth] = useState(0)
  
    useEffect(() => {
      THREE.DefaultLoadingManager.onLoad = () => setFinished(true)
      THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
        setWidth((itemsLoaded / itemsTotal) * 200)
    }, [])
  
    const animation = useTransition(finished, null, {
      from: { opacity: 1, width: 0 },
      leave: { opacity: 0 },
      update: { width },
    })
  
    return animation.map(
      ({ item: finished, key, animation: { opacity, width } }) =>
        !finished && (
          <a.div className="loading" key={key} style={{ opacity }}>
            <div className="loading-bar-container">
              <a.div className="loading-bar" style={{ width }} />
            </div>
          </a.div>
        ),
    )
  }