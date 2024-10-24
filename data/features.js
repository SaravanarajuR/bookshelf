import ShareIcon from '@mui/icons-material/Share';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Classes from "../components/homemain/homemain.module.css"

export default [
    {
        component: <ShareIcon className={Classes.icon} />,
        className: "icon",
        head: "Share Books and Documents",
        text: "We offer an innovative platform that allows you to seamlessly share your books, study materials, and documents with friends and colleagues."
    }, {
        component: <GroupsIcon className={Classes.icon} />,
        className: "icon",
        head: "Form a study group",
        text: "Collaborate with peers, share resources, and study smarter together by forming your own study group."
    }
    , {
        component: <SchoolIcon className={Classes.icon} />,
        className: "icon",
        head: "Empower Your Classroom",
        text: "Distribute learning materials, engage students with interactive resources, and track progress with tools designed for educators to simplify and elevate their teaching experience."
    }
    , {
        component: <PlayCircleFilledWhiteIcon className={Classes.icon} />,
        className: "icon",
        head: "Pick Up Where You Left Off",
        text: "Effortlessly resume reading or studying exactly where you left off. With automatic progress tracking, you'll never lose your place in a document, ensuring a seamless learning experience every time."
    }
]