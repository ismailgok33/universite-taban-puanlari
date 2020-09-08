class University {
  constructor(
    id,
    name,
    department,
    score,
    placement,
    quota,
    isState,
    city,
    universityYear,
    scoreType
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.score = score;
    this.placement = placement;
    this.quota = quota;
    this.isState = isState;
    this.city = city;
    this.universityYear = universityYear;
    this.scoreType = scoreType;
  }
}

export default University;
