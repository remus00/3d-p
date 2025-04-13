import { cn } from '../lib/utils';

interface Props {
    className?: string;
    id?: string;
    text: string;
}

export const Button = ({ className, id, text }: Props) => {
    return (
        <a id={id} className={cn('cta-wrapper', className)}>
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
