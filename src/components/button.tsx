import { cn } from '../lib/utils';

interface Props {
    className?: string;
    id?: string;
    text: string;
}

export const Button = ({ className, id, text }: Props) => {
    return (
        <a
            id={id}
            onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('counter');
                if (target && id) {
                    const offset = window.innerHeight * 0.15;
                    const top =
                        target.getBoundingClientRect().top + window.scrollY - offset;

                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }}
            className={cn('cta-wrapper', className)}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="./images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};
