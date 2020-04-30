import { FaGithub } from 'react-icons/fa';


<Typography gutterBottom variant="h5" component="h3">
  <h3><a className={styles.ProjectLink}  href={siteURL} target="_blank"> {header}</a></h3>
</Typography>
<Typography variant="body2" component="h4">
  <h4>{subheader}</h4>
</Typography>
<Typography component="p">
  <p>{description}</p>
</Typography>

<CardActions>
<Button size="small" color="primary"  target="_blank">
  <a className={styles.ProjectLink} href={githubURL} target="_blank">
    <FaGithub alt="click here to Visit this project's git hub" size={36}/> </a>
</Button> 
</CardActions>

image={imageCL}
          title={header}
          alt="animation gif previewing `${{header}}`"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            <h3><a className={styles.ProjectLink}  href={siteURL} target="_blank"> {header}</a></h3>
          </Typography>
  
          <Typography variant="body2" component="h4">
            <h4>{subheader}</h4>
          </Typography>
  
          <Typography component="p">
            <p>{description}</p>
          </Typography>
  
        </CardContent>

        <CardActions>
          <Button size="small" color="primary"  target="_blank">
            <a className={styles.ProjectLink} href={githubURL} target="_blank">
              <FaGithub alt="click here to Visit this project's git hub" size={36}/> </a>
          </Button> 

          <div className={styles.ProjectItem}>
        
        <Card className={styles.Card}>
          <CardMedia className={styles.ProjectImage} 
            image={imageL}
            title={header}
            alt="animation gif previewing `${{header}}`"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              <h3><a className={styles.ProjectLink}  href={siteURL} target="_blank"> {header}</a></h3>
            </Typography>
    
            <Typography variant="body2" component="h4">
              <h4>{subheader}</h4>
            </Typography>
    
            <Typography component="p">
              <p>{description}</p>
            </Typography>
    
          </CardContent>
  
          <CardActions>
            <Button size="small" color="primary"  target="_blank">
              <a className={styles.ProjectLink} href={githubURL}>
                <FaGithub alt="click here to Visit this project's git hub" size={36}/> </a>
            </Button> 
          </CardActions>
  
        </Card>