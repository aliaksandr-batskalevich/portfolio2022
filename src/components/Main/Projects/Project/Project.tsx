import React, {MouseEvent, useEffect, useRef, useState} from "react";
import s from './Project.module.scss';
import {ProjectType} from "../Projects";

type ProjectPropsType = {
    projectState: null | string
    project: ProjectType
    orderTimeOut: number
    colorTimeOut: number

    setProjectState: (state: null | string) => void
}
type ContextMenuComponentPropsType = {
    isMenuOpen: boolean
    codeLink: string
    viewLink: string
}

export const Project: React.FC<ProjectPropsType> = ({
                                                        projectState,
                                                        project,
                                                        setProjectState,
                                                        orderTimeOut,
                                                        colorTimeOut
                                                    }) => {

    //code for renderEffect(orderTimeOut)
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        let timeOutId = setTimeout(() => {
            setIsActive(true);
        }, orderTimeOut);

        return () => {
            clearTimeout(timeOutId)
        };
    }, []);


    // code for colorEffect
    let [colorStyle, setColorStyle] = useState({filter: 'grayscale(100%)'});
    useEffect(() => {
        let timeOutId = setTimeout(() => {
            setColorStyle({filter: 'grayscale(0)'});
        }, colorTimeOut);

        return () => {
            clearTimeout(timeOutId);
        }
    }, []);

    // code for MENU open/close
    const isMenuOpen = projectState === project.id
    const ref = useRef(null);
    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent<HTMLImageElement>) => {
            // @ts-ignore
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setProjectState(null);
            }
        };

        // @ts-ignore
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // @ts-ignore
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen]);


    const contextMenuCallHandler = (event: MouseEvent<HTMLImageElement>) => {
        setProjectState(projectState ? null : project.id);
    };

    const holderStyle = projectState && projectState !== project.id
        ? {pointerEvents: 'none' as const}
        : undefined;

    const contentClassName = isMenuOpen ? `${s.isOpenContextMenu} ${s.contentWrapper}` : s.contentWrapper;

    return (

        <>
            {isActive && <div
                className={s.projectWrapper}
                style={({...holderStyle, ...colorStyle})}
            >
                <div className={contentClassName}>
                    <img
                        ref={ref}
                        onClick={contextMenuCallHandler}
                        src={project.image}
                        alt="projectLogo"
                    />
                    <p className={s.descriptions}>{project.description}</p>
                    <ContextMenuComponent
                        isMenuOpen={isMenuOpen}
                        codeLink={project.codeLink}
                        viewLink={project.viewLink}
                    />
                </div>
                <h3>{project.title}</h3>
            </div>}
        </>

    )
};

const ContextMenuComponent: React.FC<ContextMenuComponentPropsType> = ({isMenuOpen, codeLink, viewLink}) => {

    let contextMenuWrapperClass = isMenuOpen ? `${s.contextMenuWrapper} ${s.openContextMenuWrapper}` : s.contextMenuWrapper;

    return (
        <div className={contextMenuWrapperClass}>
            <p>Open in:</p>
            <div className={s.buttonWrapper}>
                <a className={s.button} href={codeLink} target='_blank'>Code</a>
                <a className={s.button} href={viewLink} target='_blank'>Web</a>
            </div>
        </div>
    )
};