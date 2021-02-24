import React from "react";

const Card = ({ cinemaData }) => {
	return (
		<>
			<div className='cardWrapper'>
				<ul>
					<li>
						<div className='cardBox'>
							<div className='imgBox'>
								<img
									src={
										cinemaData.Poster
											? cinemaData.Poster
											: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
									}
									alt='poster'
								/>
							</div>
							<div className='contentBox'>
								<div className='headingText'>
									<h3>
										{cinemaData.Title ? cinemaData.Title : "Cinema Title"}
									</h3>
									<p>
										{cinemaData.Production ? cinemaData.Production : "Subtitle"}
									</p>
								</div>
								<span>Callout</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Card;
