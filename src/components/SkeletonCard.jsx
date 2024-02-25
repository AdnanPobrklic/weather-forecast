import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function SkeletonCard(){
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="skeleton-card">
                <Skeleton/>
            </div>
        </ SkeletonTheme>
    )
}