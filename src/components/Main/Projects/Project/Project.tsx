import React, {useState, MouseEvent, useRef, useEffect} from "react";
import s from './Project.module.scss';

type ContextMenuComponentPropsType = {
    isMenuOpen: boolean
    codeLink: string
    viewLink: string
}

// from BLL:
let project = {
    title: 'Social Network',
    image: 'https://techjournal.org/wp-content/uploads/2022/01/Goals-of-Social-Network-Analysis.jpg',
    description: 'My first project with using React, Redux, Redux-form, REST-API.',
    codeLink: 'https://github.com/aliaksandr-batskalevich/3-react-samurai-way/tree/master/src',
    viewLink: 'https://aliaksandr-batskalevich.github.io/3-react-samurai-way',
};

export const Project = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const ref = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = ( e: MouseEvent<HTMLImageElement>) => {
            // @ts-ignore
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false);
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
        setIsMenuOpen(!isMenuOpen);
    };

    const contentClassName = isMenuOpen ? `${s.isOpenContextMenu} ${s.contentWrapper}` : s.contentWrapper;

    return (
        <div className={s.projectWrapper}>
            <div className={contentClassName}>
                <img
                    ref={ref}
                    onClick={contextMenuCallHandler}
                    src={project.image}
                    alt="projectLogo"
                />
                <ContextMenuComponent isMenuOpen={isMenuOpen} codeLink={project.codeLink} viewLink={project.viewLink}/>
            </div>
            <h3>{project.title}</h3>
        </div>
    )
}

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
}